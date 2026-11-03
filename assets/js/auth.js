/**
 * VanVoyage – Authentication & User Session Engine
 * LocalStorage powered demo authentication
 */

const AUTH_KEY = 'vanvoyage_active_user';
const USERS_LIST_KEY = 'vanvoyage_registered_users';

const Auth = {
  // Get active session user
  getUser() {
    const raw = localStorage.getItem(AUTH_KEY);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        return null;
      }
    }
    return null;
  },

  // Save active user
  setUser(user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    this.updateNavUI();
  },

  // Check login status
  isLoggedIn() {
    return !!this.getUser();
  },

  // Login handler
  login(email, password, remember = true) {
    // If matching default demo user or existing registered user
    const users = this.getRegisteredUsers();
    let found = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!found) {
      // If demo credentials or new quick login
      found = {
        name: email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        email: email,
        phone: "+1 (555) 782-9912",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        tier: "Explorer Elite Member",
        memberSince: "November 2026",
        licenseNumber: "CO-D839210-EXP2029"
      };
      users.push(found);
      localStorage.setItem(USERS_LIST_KEY, JSON.stringify(users));
    }

    this.setUser(found);
    return { success: true, user: found };
  },

  // Register handler
  register(userData) {
    const users = this.getRegisteredUsers();
    const existing = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
    
    if (existing) {
      return { success: false, message: "An account with this email already exists." };
    }

    const newUser = {
      name: userData.fullName,
      email: userData.email,
      phone: userData.phone || "+1 (555) 000-0000",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      tier: "Adventurer",
      memberSince: "November 2026",
      licenseNumber: userData.licenseNumber || "PENDING-VERIFY"
    };

    users.push(newUser);
    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(users));
    this.setUser(newUser);
    return { success: true, user: newUser };
  },

  // Get all registered users or initialize with default
  getRegisteredUsers() {
    const raw = localStorage.getItem(USERS_LIST_KEY);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        return [window.VANVOYAGE_DATA.defaultUser];
      }
    }
    const defaults = [window.VANVOYAGE_DATA.defaultUser];
    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(defaults));
    return defaults;
  },

  // Logout handler
  logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = 'login.html';
  },

  // Route protector for dashboard
  requireAuth() {
    if (!this.isLoggedIn()) {
      // Pre-set default user for immediate test friendliness or redirect
      this.setUser(window.VANVOYAGE_DATA.defaultUser);
    }
  },

  // Update public navbar UI depending on auth status
  updateNavUI() {
    const user = this.getUser();
    const authContainers = document.querySelectorAll('.nav-auth-slot');
    
    authContainers.forEach(container => {
      if (user) {
        container.innerHTML = `
          <a href="dashboard.html" class="btn-forest btn-sm-custom" style="padding: 7px 16px;">
            <i data-lucide="layout-dashboard" style="width: 16px; height: 16px;"></i>
            <span>Dashboard</span>
          </a>
          <button onclick="Auth.logout()" class="btn-outline-gold btn-sm-custom" style="padding: 7px 14px;" title="Logout">
            <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
          </button>
        `;
      } else {
        container.innerHTML = `
          <a href="login.html" class="btn-outline-gold btn-sm-custom">Login</a>
          <a href="register.html" class="btn-gold btn-sm-custom">Register</a>
        `;
      }
    });

    // Also update mobile drawer slot
    const mobileAuthSlots = document.querySelectorAll('.mobile-auth-slot');
    mobileAuthSlots.forEach(slot => {
      if (user) {
        slot.innerHTML = `
          <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Signed in as</div>
            <div style="font-weight: 700; color: var(--color-gold);">${user.name}</div>
          </div>
          <a href="dashboard.html" class="btn-gold w-100 mb-2">Customer Dashboard</a>
          <button onclick="Auth.logout()" class="btn-outline-gold w-100">Logout</button>
        `;
      } else {
        slot.innerHTML = `
          <a href="login.html" class="btn-outline-gold w-100 mb-2">Login to Account</a>
          <a href="register.html" class="btn-gold w-100">Create Account</a>
        `;
      }
    });

    if (window.initLucide) {
      window.initLucide();
    }
  }
};

// Auto-run UI sync on load
document.addEventListener('DOMContentLoaded', () => {
  Auth.updateNavUI();
});

window.Auth = Auth;
