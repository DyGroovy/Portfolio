<template>
  <div class="portfolio-showcase">
    <h1>Portfolio Showcase</h1>
    <p>My Ongoing and Finished Projects</p>

    <!-- Repository Cards -->
    <div class="repository-container">
      <div class="repository-card">
        <img :src="repository.image" alt="Stem and Leaf Plot Calculator" class="repo-image" />
        <div class="repo-content">
          <h2>{{ repository.title }}</h2>
          <p>{{ repository.description }}</p>
          <a :href="repository.link" target="_blank" class="repo-link">View on GitHub</a>
        </div>
      </div>

      <div class="repository-card">
        <img :src="vercelRepository.image" alt="OS Prelim Exam" class="repo-image" />
        <div class="repo-content">
          <h2>{{ vercelRepository.title }}</h2>
          <p>{{ vercelRepository.description }}</p>
          <a :href="vercelRepository.link" target="_blank" class="repo-link">View on Vercel</a>
        </div>
      </div>

      <div class="repository-card">
        <img :src="adminDashboard.image" alt="Admin Dashboard" class="repo-image" />
        <div class="repo-content">
          <h2>{{ adminDashboard.title }}</h2>
          <p>{{ adminDashboard.description }}</p>
          <a :href="adminDashboard.link" target="_blank" class="repo-link">View on GitHub</a>
        </div>
      </div>
    </div>

    <!-- Video Cards -->
    <div class="video-container">
      <div class="video-card" v-for="(video, index) in videos" :key="index">
        <img :src="video.previewImage" alt="Video preview" class="video-preview-image" />
        <button @click="playVideo(video.src)" class="play-button">Play Video</button>
        <div class="video-content">
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioShowcase',
  data() {
    return {
      repository: {
        title: 'Stem and Leaf Plot Calculator',
        description: 'A project that creates stem and leaf plots for data visualization.',
        link: 'https://vercel.live/link/engineering-data-analysis-project.vercel.app?via=project-dashboard-alias-list&p=1',
        image: require('@/assets/images/st.jpg') // Replace with a relevant image or screenshot
      },
      vercelRepository: {
        title: 'OS Prelim Exam',
        description: 'An online platform for taking preliminary exams.',
        link: 'https://os-prelim-exam.vercel.app/',
        image: require('@/assets/images/os.jpg') // Replace with a relevant image or screenshot
      },
      adminDashboard: {
        title: 'Admin Dashboard Final Project',
        description: 'A comprehensive dashboard for managing user data and analytics.',
        link: 'https://github.com/DyGroovy/Admin-Dashboard-Final-Proj',
        image: require('@/assets/images/admin.jpg') // Replace with a relevant image or screenshot
      },
      videos: [
        {
          title: 'Bluetooth Controlled Robot Car',
          description: 'A robot car that can be controlled via Bluetooth.',
          src: require('@/assets/video/blue.mp4'),
          previewImage: require('@/assets/images/os.jpg'), // Add preview image
        },
        {
          title: 'LED Memorization Game',
          description: 'A game that challenges players to memorize LED patterns.',
          src: require('@/assets/video/ledg.mp4'),
          previewImage: require('@/assets/images/os.jpg'), // Add preview image
        },
        {
          title: 'Obstacle Avoiding Robot Car',
          description: 'A robot car that avoids obstacles using sensors.',
          src: require('@/assets/video/obs.mp4'),
          previewImage: require('@/assets/images/os.jpg'), // Add preview image
        },
        {
          title: 'RFID Door Lock using Servo',
          description: 'A door locking system controlled by RFID.',
          src: require('@/assets/video/rfid.mp4'),
          previewImage: require('@/assets/images/os.jpg'), // Add preview image
        },
        {
          title: 'Traffic Light System',
          description: 'A simulation of a traffic light system.',
          src: require('@/assets/video/traffic.mp4'),
          previewImage: require('@/assets/images/os.jpg'), // Add preview image
        }
      ]
    };
  },
  methods: {
    playVideo(src) {
      window.open(src, '_blank'); // Open video in a new tab
    }
  }
};
</script>

<style scoped>
.portfolio-showcase {
  text-align: left;
  margin: 0 auto; /* Center the showcase */
  padding: 20px;
  margin-left: -25%; /* Keep the negative margin as per your requirement */
}

.repository-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px; /* Space between cards */
}

.repository-card,
.video-card {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-start;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.video-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for video cards */
  gap: 20px; /* Space between video cards */
  margin-top: 20px; /* Space from repository cards */
}

.repo-image,
.video-preview-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.play-button {
  background-color: #0366d6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px; /* Set a consistent font size */
  cursor: pointer;
  margin-top: auto; /* Pushes the button to the bottom of the card */
  width: 25%; /* Make the button full width for consistency */
}

.play-button:hover {
  background-color: #024bbd;
}

.video-content {
  flex-grow: 1; /* Allows the video content to take available space */
}

.repo-content,
.video-content {
  flex-grow: 1;
}

.repo-content h2,
.video-content h3 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.repo-content p,
.video-content p {
  font-size: 16px;
  margin: 10px 0;
}

.repo-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #0366d6;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
}

.repo-link:hover {
  background-color: #024bbd;
}
</style>
