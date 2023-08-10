<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Instagram Profile</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fafafa;
    }
    .header {
      background-color: #fff;
      padding: 20px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .profile-info {
      display: flex;
      align-items: center;
    }
    .profile-pic {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
    }
    .profile-name {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .post {
      background-color: #fff;
      border: 1px solid #ddd;
      margin: 20px;
      padding: 10px;
      border-radius: 5px;
    }
    .post-image {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }
    .post-caption {
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="profile-info">
      <img class="profile-pic" src="profile.jpg" alt="Profile Picture">
      <div class="profile-name">Your Username</div>
    </div>
    <button>Edit Profile</button>
  </div>
  <div class="post">
    <img class="post-image" src="post1.jpg" alt="Post Image">
    <div class="post-caption">Amazing day at the beach! 🌞🏖️</div>
  </div>
  <div class="post">
    <img class="post-image" src="post2.jpg" alt="Post Image">
    <div class="post-caption">Exploring new places. 🌍✈️</div>
  </div>
  <!-- More posts can be added here -->
</body>
</html
