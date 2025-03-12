<template>
  <div class="app">
    <!-- Fixed Navbar -->
    <nav class="navbar">
      <div class="logo">
        <a href="#hero">
          <img src="@/assets/logo.svg" alt="Company Logo" />
        </a>
      </div>
      <ul>
        <li><a href="#staking">Staking</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><button @click="openWhitepaper">Whitepaper</button></li>
      </ul>
    </nav>

    <HeroSection

    />

    <section id="staking">
      <div class="container">
        <StakingDashboard />
      </div>
    </section>

    <section id="roadmap">
      <div class="container">
        <Roadmap />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import StakingDashboard from "@/components/StakingDashboard.vue";
import Roadmap from "@/components/Roadmap.vue";

const openWhitepaper = () => {
  window.open("https://google.com", "_blank");
};
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";

.app {
  width: 100%;
  height: auto;
}

.navbar {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 70px;
  z-index: 999;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo img {
    height: 50px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 30px;

    li {
      display: flex;
      align-items: center;
    }

    a, button {
      background: none;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: $primary-color;
      }
    }
  }
}

section {
  min-height: 100vh;
}
</style>