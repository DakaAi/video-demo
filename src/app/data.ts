export const uploadsUrl = "https://dev.api.dakaai.io/uploads/";

export const title = "AI models";

// 'Abandoned object.svg'    'Running detection.svg'
// 'Abandoned object2.svg'    Station.svg
// 'Age detection.svg'       'Tired driver.svg'
// 'Falling detection.svg'    Tramway.svg
// 'Fighting detection.svg'   Vandalism.svg
// 'Motion detection.svg'    'Vehicle counting.svg'
// 'People counting.svg'     'Weapon detection.svg'

export const models = [
  {
    id: "1",
    // name: "Counting Station Entre",
    name: "Station Entre Counting",
    icon: "icons/Station.svg",
    videoUrl: "videos/Counting Station Entre .mp4",
  },
  {
    id: "2",
    name: "People counting",
    icon: "icons/People counting.svg",
    videoUrl: "videos/Counting.mp4",
  },
  {
    id: "3",
    name: "Fall Detection",
    icon: "icons/Falling detection.svg",
    description: null,
    videoUrl: "videos/Fall Detection.mp4",
  },
  {
    id: "4",
    name: "Fighting",
    aiCode: "vehicule",
    icon: "icons/Fighting detection.svg",
    description: null,
    videoUrl: "videos/Fighting.mp4",
  },
  {
    id: "5",
    name: "Motion Detection",
    icon: "icons/Motion detection.svg",
    description: null,
    videoUrl: "videos/Motion1.mp4",
  },
  // {
  //   id: "6",
  //   // name: "namee_age_gender",
  //   name: "Age and gender detection",
  //   icon: "icons/Age detection.svg",
  //   description: null,
  //   videoUrl: "videos/namee_age_gender.mp4",
  // },
  {
    id: "7",
    // name: "Objet Abandonne",
    name: "Abandoned object",
    icon: "icons/Abandoned object.svg",
    description: null,
    videoUrl: "videos/Objet Abandonne.mp4",
  },
  {
    id: "8",
    // name: "Output Video Blue 1 Tracking",
    name: "hightway Vehicle counting",
    icon: "icons/Vehicle counting.svg",
    description: null,
    videoUrl: "videos/Output Video Blue 1 Tracking.mp4",
  },
  // {
  //   id: "9",
  //   // name: "output_video_blue_1_tracking_t",
  //   name: "Vehicle tracking 2",
  //   icon: "icons/Vehicle counting.svg",
  //   description: null,
  //   videoUrl: "videos/output_video_blue_1_tracking_t.mp4",
  // },
  {
    id: "10",
    // name: "Running",
    name: "Running detection",
    icon: "icons/Running detection.svg",
    description: null,
    videoUrl: "videos/Running Segment.mp4",
  },
  {
    id: "12",
    // name: "Station",
    name: "Smart fuel station",
    icon: "icons/Station.svg",
    description: null,
    videoUrl: "videos/Counting Station Entre Station V6-1.mp4", // TODO: update video
  },
  {
    id: "13",
    name: "Tram driver assistance",
    icon: "icons/Tramway.svg",
    description: null,
    videoUrl: "videos/Tramway.mp4",
  },
  {
    id: "14",
    // name: "Vandalism",
    name: "Vandalism Detection",
    icon: "icons/Vandalism.svg",
    description: null,
    videoUrl: "videos/Vandalism.mp4",
  },
  {
    id: "16",
    // name: "Weapon Crop Detected",
    name: "Weapon detection",
    icon: "icons/Weapon detection.svg",
    description: null,
    videoUrl: "videos/Weapon  .mp4",
  },
];
