/**
 * VanVoyage – Booking & Wishlist Engine
 * Handles vehicle reservations, addon pricing, wishlist state, and localStorage persistence
 */

const BOOKINGS_STORAGE_KEY = 'vanvoyage_bookings';
const WISHLIST_STORAGE_KEY = 'vanvoyage_saved_vehicles';

const BookingEngine = {
  // --- Wishlist Management ---
  getSavedVehicleIds() {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        return ['vv-nomad-4x4', 'vv-alpine-escape'];
      }
    }
    const defaults = ['vv-nomad-4x4', 'vv-alpine-escape'];
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(defaults));
    return defaults;
  },

  isSaved(vehicleId) {
    const ids = this.getSavedVehicleIds();
    return ids.includes(vehicleId);
  },

  toggleSave(vehicleId) {
    let ids = this.getSavedVehicleIds();
    let isNowSaved = false;

    if (ids.includes(vehicleId)) {
      ids = ids.filter(id => id !== vehicleId);
      window.showToast("Vehicle removed from Saved list", "heart-off");
    } else {
      ids.push(vehicleId);
      isNowSaved = true;
      window.showToast("Vehicle added to your Saved list!", "heart");
    }

    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(ids));
    this.updateWishlistBadges();
    return isNowSaved;
  },

  updateWishlistBadges() {
    const ids = this.getSavedVehicleIds();
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const vid = btn.getAttribute('data-wishlist-id');
      if (ids.includes(vid)) {
        btn.classList.add('active');
        btn.setAttribute('title', 'Remove from Saved');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('title', 'Save vehicle');
      }
    });

    // Update wishlist counter badge in dashboard if present
    const counterBadge = document.getElementById('saved-vehicles-count');
    if (counterBadge) {
      counterBadge.innerText = ids.length;
    }
  },

  // --- Bookings Management ---
  getBookings() {
    const raw = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        return window.VANVOYAGE_DATA.defaultBookings;
      }
    }
    const defaults = window.VANVOYAGE_DATA.defaultBookings;
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(defaults));
    return defaults;
  },

  getBookingById(id) {
    const list = this.getBookings();
    return list.find(b => b.id === id) || list[0];
  },

  createBooking(booking) {
    const list = this.getBookings();
    list.unshift(booking);
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(list));
    return booking;
  },

  cancelBooking(id) {
    const list = this.getBookings();
    const target = list.find(b => b.id === id);
    if (target) {
      target.status = 'Cancelled';
      target.statusClass = 'badge-cancelled';
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(list));
      window.showToast(`Booking ${id} has been cancelled`, "check-circle");
      return true;
    }
    return false;
  },

  // --- Dynamic Quick Booking Modal Handler ---
  openBookingModal(vehicleId) {
    const vehicle = window.VANVOYAGE_DATA.vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return;

    // Set modal fields
    const modalEl = document.getElementById('bookingModal');
    if (!modalEl) return;

    document.getElementById('modalVehicleTitle').innerText = vehicle.name;
    document.getElementById('modalVehicleRate').innerText = `$${vehicle.dailyRate}/day`;
    document.getElementById('modalVehicleImg').src = vehicle.image;
    document.getElementById('modalVehicleId').value = vehicle.id;

    // Calculate dates (tomorrow to +5 days by default)
    const today = new Date();
    const pickupDate = new Date(today);
    pickupDate.setDate(today.getDate() + 3);
    const dropoffDate = new Date(pickupDate);
    dropoffDate.setDate(pickupDate.getDate() + 5);

    const pickupInput = document.getElementById('modalPickupDate');
    const dropoffInput = document.getElementById('modalDropoffDate');

    if (pickupInput && dropoffInput) {
      pickupInput.value = pickupDate.toISOString().split('T')[0];
      dropoffInput.value = dropoffDate.toISOString().split('T')[0];
      pickupInput.min = today.toISOString().split('T')[0];
      dropoffInput.min = pickupInput.value;
    }

    BookingEngine.calculateModalTotal(vehicle.dailyRate);

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  },

  calculateModalTotal(dailyRate) {
    const pVal = document.getElementById('modalPickupDate')?.value;
    const dVal = document.getElementById('modalDropoffDate')?.value;
    if (!pVal || !dVal) return;

    const pDate = new Date(pVal);
    const dDate = new Date(dVal);
    const diffTime = Math.max(dDate - pDate, 1000 * 60 * 60 * 24);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const insurance = 25 * days;
    const vehicleCost = dailyRate * days;
    const serviceFee = 85;
    const total = vehicleCost + insurance + serviceFee;

    const daysEl = document.getElementById('modalSummaryDays');
    const totalEl = document.getElementById('modalSummaryTotal');

    if (daysEl) daysEl.innerText = `${days} days`;
    if (totalEl) totalEl.innerText = `$${total.toLocaleString()}`;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  BookingEngine.updateWishlistBadges();
});

window.BookingEngine = BookingEngine;
