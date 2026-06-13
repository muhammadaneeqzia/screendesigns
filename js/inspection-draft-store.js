/**
 * Inspection Draft Store — client-side LocalStorage persistence
 * Designed for extension to backend sync without refactoring the public API.
 */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'autofixia_inspection_draft_v1';
  const SCHEMA_VERSION = 1;
  const MAX_PHOTO_DATA_URLS = 24;

  const InspectionDraftStore = {
    STORAGE_KEY,
    SCHEMA_VERSION,

    /**
     * @returns {import('./types').InspectionDraft|null}
     */
    load() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!this.validate(parsed)) {
          console.warn('[DraftStore] Invalid draft discarded');
          this.clear();
          return null;
        }
        return parsed;
      } catch (err) {
        console.warn('[DraftStore] Corrupted draft cleared', err);
        this.clear();
        return null;
      }
    },

    /**
     * @param {object} draft
     * @returns {boolean}
     */
    validate(draft) {
      if (!draft || typeof draft !== 'object') return false;
      if (draft.schemaVersion !== SCHEMA_VERSION) return false;
      if (draft.status !== 'in_progress') return false;
      if (!draft.updatedAt || typeof draft.updatedAt !== 'string') return false;
      if (!['onboarding', 'inspection'].includes(draft.phase)) return false;
      if (!draft.onboarding || typeof draft.onboarding !== 'object') return false;
      if (!['customer', 'vehicle', 'inspectionType'].includes(draft.onboarding.screen)) return false;
      if (typeof draft.onboarding.customer !== 'string') return false;
      if (!Number.isInteger(draft.onboarding.vehicleIndex) || draft.onboarding.vehicleIndex < 0) return false;
      if (!Number.isInteger(draft.onboarding.inspectionTypeIndex) || draft.onboarding.inspectionTypeIndex < 0) return false;
      if (!draft.inspection || typeof draft.inspection !== 'object') return false;
      if (!Number.isInteger(draft.inspection.currentStep) || draft.inspection.currentStep < 0) return false;
      if (typeof draft.inspection.sidebarCollapsed !== 'boolean') return false;
      if (!draft.inspection.points || typeof draft.inspection.points !== 'object') return false;
      return true;
    },

    /**
     * @param {object} draft
     * @returns {{ ok: boolean, error?: string }}
     */
    save(draft) {
      try {
        const payload = {
          ...draft,
          schemaVersion: SCHEMA_VERSION,
          status: 'in_progress',
          updatedAt: new Date().toISOString()
        };
        if (!this.validate(payload)) {
          return { ok: false, error: 'validation_failed' };
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        return { ok: true };
      } catch (err) {
        if (err && (err.name === 'QuotaExceededError' || err.code === 22)) {
          return { ok: false, error: 'quota_exceeded' };
        }
        console.error('[DraftStore] Save failed', err);
        return { ok: false, error: 'unknown' };
      }
    },

    clear() {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {
        console.warn('[DraftStore] Clear failed', err);
      }
    },

    hasDraft() {
      return !!this.load();
    },

    /**
     * Strip photo binary data when storage quota is exceeded.
     * @param {object} draft
     */
    stripPhotoData(draft) {
      const clone = JSON.parse(JSON.stringify(draft));
      const points = clone.inspection?.points || {};
      Object.keys(points).forEach((key) => {
        if (Array.isArray(points[key].photos)) {
          points[key].photos = points[key].photos.map((p) => ({
            id: p.id,
            name: p.name,
            size: p.size,
            dataUrl: null,
            stripped: true
          }));
        }
      });
      clone.photosStripped = true;
      return clone;
    },

    /**
     * Build a draft snapshot from live application state.
     * @param {object} ctx
     */
    buildSnapshot(ctx) {
      const {
        phase,
        onboardingScreen,
        selectedCustomer,
        vehicleIndex,
        inspectionTypeIndex,
        currentStep,
        sidebarCollapsed,
        state,
        categoryCount
      } = ctx;

      const points = {};
      let photoCount = 0;

      Object.keys(state).forEach((pt) => {
        const s = state[pt];
        const photos = (s.photos || []).map((p) => {
          const dataUrl = p.dataUrl || (typeof p.url === 'string' && p.url.startsWith('data:') ? p.url : null);
          if (dataUrl) photoCount++;
          return {
            id: p.id,
            name: p.name,
            size: p.size,
            dataUrl: photoCount <= MAX_PHOTO_DATA_URLS ? dataUrl : null,
            stripped: photoCount > MAX_PHOTO_DATA_URLS
          };
        });

        points[pt] = {
          score: s.score,
          status: s.status,
          noteText: s.noteText || '',
          treadDepth: s.treadDepth,
          brakeThickness: s.brakeThickness,
          photos
        };
      });

      return {
        schemaVersion: SCHEMA_VERSION,
        status: 'in_progress',
        updatedAt: new Date().toISOString(),
        phase,
        onboarding: {
          screen: onboardingScreen,
          customer: selectedCustomer,
          vehicleIndex,
          inspectionTypeIndex
        },
        inspection: {
          currentStep: Math.max(0, Math.min(categoryCount - 1, currentStep)),
          sidebarCollapsed: !!sidebarCollapsed,
          points
        },
        // Reserved for future backend sync (no behavior today)
        sync: {
          remoteId: null,
          syncStatus: 'local_only',
          lastSyncedAt: null
        }
      };
    }
  };

  global.InspectionDraftStore = InspectionDraftStore;
})(typeof window !== 'undefined' ? window : globalThis);
