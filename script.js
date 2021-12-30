(function(){
    var script = {
 "start": "this.init(); this.set('mute', true)",
 "downloadEnabled": false,
 "data": {
  "name": "Player451"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "class": "Player",
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01839243_0CA5_7EA4_419E_D5FA4C763B44"
},
{
 "thumbnailUrl": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_t.jpg",
 "class": "Panorama",
 "label": "9",
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -14.93,
   "class": "AdjacentPanorama",
   "yaw": 172.21,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -14.93,
   "class": "AdjacentPanorama",
   "yaw": 165.05,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -14.93,
   "class": "AdjacentPanorama",
   "yaw": -171.84,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": 163.66,
   "class": "AdjacentPanorama",
   "yaw": -1.78,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": 163.66,
   "class": "AdjacentPanorama",
   "yaw": 5.04,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": -163.05,
   "class": "AdjacentPanorama",
   "yaw": -68.96,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": -163.05,
   "class": "AdjacentPanorama",
   "yaw": -62.54,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": 120.71,
   "class": "AdjacentPanorama",
   "yaw": -55.5,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E65A9820_F0D4_D26D_4190_88B35F159298",
  "this.overlay_E998D320_F0DC_D66D_41B4_B90D91064136",
  "this.overlay_EAA49BC9_F0DC_363F_41EA_7CD00897199A",
  "this.overlay_EBA81ADA_F0DC_D7DD_41BD_F1BBD5CF5CED",
  "this.overlay_EAE1CF24_F21F_2FFC_41CD_4AC7A2B73E22",
  "this.overlay_E50BD41B_F21F_31D4_41C0_47B69F79630C",
  "this.overlay_EBC4A709_F221_1FB5_41C7_B8AEF9C70B64",
  "this.overlay_EA4CD800_F221_31B3_41E0_CADB55C030DA",
  "this.overlay_EB8EB2F5_F223_165D_41D5_B3AA429062A3",
  "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.57,
  "pitch": 0,
  "hfov": 127
 },
 "class": "PanoramaCamera",
 "id": "camera_00E7814C_0CA5_7ABC_4153_CE527809FCA6"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0037E366_0CA5_7D6D_41A1_6629256DB4B9"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.64,
  "pitch": -4.2
 },
 "class": "PanoramaCamera",
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00D5C345_0CA5_7EAF_4195_5FF49FF362FC"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00C1A16F_0CA5_7D7C_4195_49B1E2A11785"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0023135B_0CA5_7D5B_4171_3CD1A3DF2E78"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00AAB2A1_0CA5_7FE4_4195_332580040776"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_000F91BA_0CA5_7DE5_4195_4447B7A8D499"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.54,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01F66262_0CA5_7F65_41A8_CFD19C3EFCD0"
},
{
 "thumbnailUrl": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_t.jpg",
 "class": "Panorama",
 "label": "10",
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -1.78,
   "class": "AdjacentPanorama",
   "yaw": 163.66,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 135.51,
   "class": "AdjacentPanorama",
   "yaw": -142.82,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 135.51,
   "class": "AdjacentPanorama",
   "yaw": -145.22,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 135.51,
   "class": "AdjacentPanorama",
   "yaw": -146.95,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "backwardYaw": 144.32,
   "class": "AdjacentPanorama",
   "yaw": -131.41,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E91B0BE8_F0D4_35FE_41EB_904E45241F77",
  "this.overlay_EB523FB0_F0D4_EE6E_41D8_151ABE741474",
  "this.overlay_E89D3040_F0D5_D22E_41B9_1BDC16562082",
  "this.overlay_EBD507BE_F0D4_5E52_41E7_D00851EA4F8A",
  "this.overlay_E51B41DF_F263_324C_41E9_811B3E6A0353",
  "this.overlay_EAFA5D33_F263_13D4_41EB_CE40535C65B9",
  "this.overlay_EA43D0D2_F221_1254_41E8_3F262F23FABA",
  "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01D7D09D_0CA5_7BDC_41A2_B349607E9D44"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_009052EF_0CA5_7F7C_419A_C044EDB21924"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0044A3A6_0CA5_7DEC_41A4_4CAC64B36AA0"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_001241C9_0CA5_7DA6_41A1_15CA047EC846"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.34,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00DF9183_0CA5_7DA4_41A0_3150715B6600"
},
{
 "thumbnailUrl": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_t.jpg",
 "class": "Panorama",
 "label": "2",
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "backwardYaw": -7.03,
   "class": "AdjacentPanorama",
   "yaw": 175.93,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "backwardYaw": -7.03,
   "class": "AdjacentPanorama",
   "yaw": 165.71,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "backwardYaw": 169.83,
   "class": "AdjacentPanorama",
   "yaw": 0.5,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FFA8E91E_E649_6912_41EA_25F93DB663F0",
  "this.overlay_FF378CE7_E649_2F32_41E6_C8A4DB437805",
  "this.overlay_FFD33961_E647_292E_41E2_4E840151C994",
  "this.overlay_FFF1E0C5_E647_3776_41CE_BCBE0F5E2671",
  "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_007471E5_0CA5_7D6F_4196_92ECED511D33"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0076039C_0CA5_7DDC_4187_0520FE0BAC20"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00D99350_0CA5_7EA5_4187_DA089F988A7E"
},
{
 "thumbnailUrl": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_t.jpg",
 "class": "Panorama",
 "label": "15",
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": -131.41,
   "class": "AdjacentPanorama",
   "yaw": 144.32,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": -131.41,
   "class": "AdjacentPanorama",
   "yaw": 134.28,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": -46.39,
   "class": "AdjacentPanorama",
   "yaw": 154.47,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": -46.39,
   "class": "AdjacentPanorama",
   "yaw": 162.19,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": -167.55,
   "class": "AdjacentPanorama",
   "yaw": 82.62,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": -167.55,
   "class": "AdjacentPanorama",
   "yaw": 89.53,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E7602CC4_F263_12BC_41CC_E94B04E3DF22",
  "this.overlay_E77D67F9_F261_3E55_41D9_F4D8152FB2A5",
  "this.overlay_E72758A0_F261_12F4_41AB_217536E83188",
  "this.overlay_E482B904_F27F_33BC_41EE_1654AE186CFB",
  "this.overlay_E49EBE0C_F27F_11B3_4192_C7906B82EEAC",
  "this.overlay_E4E3FC0B_F261_F1B4_41EC_E34EB27B5570",
  "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00D5A178_0CA5_7D64_41A8_150F99566141"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00B5A10A_0CA5_7AA5_417E_387819F4CE76"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00A160EB_0CA5_7B64_417F_314F7A99DAAA"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01E03253_0CA5_7EA4_41A3_3513A28BE6E4"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00BAD2B0_0CA5_7FE5_4191_B5F2E6B73AF6"
},
{
 "thumbnailUrl": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_t.jpg",
 "class": "Panorama",
 "label": "14",
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -55.5,
   "class": "AdjacentPanorama",
   "yaw": 120.71,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -55.5,
   "class": "AdjacentPanorama",
   "yaw": 122.11,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 45.02,
   "class": "AdjacentPanorama",
   "yaw": 131.26,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 45.02,
   "class": "AdjacentPanorama",
   "yaw": 110.41,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 45.02,
   "class": "AdjacentPanorama",
   "yaw": 133.54,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "backwardYaw": 82.62,
   "class": "AdjacentPanorama",
   "yaw": -167.55,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E1218EF8_F221_EE54_41EA_CEEFCF71EEBF",
  "this.overlay_E17FDDD4_F221_1253_41CE_EFDE082CE36C",
  "this.overlay_E7FE903B_F263_11D4_41EE_2C8A1671F162",
  "this.overlay_EAF7AC82_F21E_F2B4_41D6_3D2FE0149904",
  "this.overlay_EAA2322C_F221_71F3_41EB_6850C713CF1D",
  "this.overlay_EAB6E883_F221_12B5_41D1_8306A5AA4E0B",
  "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00B712A1_0CA5_7FE4_41A2_C3C3C0367F1F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01BC9233_0CA5_7EEB_41A8_7B8D8C47A647"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_075380CC_0CA5_7BBC_416B_F4B63E82E4FC"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01C4908D_0CA5_7BBF_41A8_4DE4B2FE4792"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_003BE371_0CA5_7D64_41A5_6A1273894964"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00C3B33A_0CA5_7EE5_41A8_3B525528C171"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01905253_0CA5_7EA4_41A1_CE63ACA79F52"
},
{
 "thumbnailUrl": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "7",
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": 38.46,
   "class": "AdjacentPanorama",
   "yaw": 44.43,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": 38.46,
   "class": "AdjacentPanorama",
   "yaw": 29.96,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 136,
 "overlays": [
  "this.overlay_E5C5F71F_E826_7E97_41A2_D36B77CAF576",
  "this.overlay_E5F579AB_E826_95B8_41BA_814E75F81412",
  "this.overlay_E798AE19_E83A_8E9B_41BF_D0CD0C67E1A4",
  "this.overlay_E73FED1F_E83B_B297_41E4_379B1ED0B380",
  "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00AE30FB_0CA5_7B64_4173_7CAB8A28E098"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "media": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_camera"
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.57,
  "pitch": 0,
  "hfov": 127
 },
 "class": "PanoramaCamera",
 "id": "camera_00EA7156_0CA5_7AAC_4171_1BB9D3CD851A"
},
{
 "thumbnailUrl": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_t.jpg",
 "class": "Panorama",
 "label": "5",
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": 132.02,
   "class": "AdjacentPanorama",
   "yaw": -90.35,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": 132.02,
   "class": "AdjacentPanorama",
   "yaw": -72.23,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "backwardYaw": 44.43,
   "class": "AdjacentPanorama",
   "yaw": 38.46,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "backwardYaw": 44.43,
   "class": "AdjacentPanorama",
   "yaw": 33.66,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F372935F_E6DB_1912_41E1_A9A50BC3092A",
  "this.overlay_F3C35AC2_E6D9_EB72_41CB_52727B8D05DA",
  "this.overlay_F35B4673_E6D9_3B12_41E6_6D942D653E62",
  "this.overlay_F0B73EAE_E6C9_2B32_41BE_A45DB6F00C5F",
  "this.overlay_E7E3E5BF_F0B4_7253_41E9_81B0692BA6DB",
  "this.overlay_E7F1B50E_F0B4_3235_41E3_B4B9071911ED",
  "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_006701D6_0CA5_7DAC_4184_00E730E15B10"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00673392_0CA5_7DA4_41A0_04E90317B8A6"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00E492FE_0CA5_7F5D_41A5_9BF6F5930887"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.54,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01C62272_0CA5_7F64_41A2_F85701EF077C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00BC92B0_0CA5_7FE5_4181_0ED07643A337"
},
{
 "thumbnailUrl": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_t.jpg",
 "class": "Panorama",
 "label": "13",
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E3F1B5DE_F223_124C_41EA_3A2EEE54E7E4",
  "this.overlay_E2F633BC_F223_16CC_41E7_54695B4EB8B4",
  "this.overlay_E05D49D2_F222_F254_41D8_1C4966A460A8",
  "this.overlay_E53DE815_F267_11DD_41D4_91DD49C4C392",
  "this.overlay_E50CF6B5_F266_FEDC_41D6_53B81E0E4E10",
  "this.overlay_E518569B_F261_1ED4_41D0_23E5AC8FBB9E",
  "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0087D2C0_0CA5_7FA4_4184_2013AEB5B1C0"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_camera"
},
{
 "thumbnailUrl": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_t.jpg",
 "class": "Panorama",
 "label": "!1",
 "id": "panorama_EDA86099_E64F_371E_41EA_4048F9685E6D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "backwardYaw": 149.6,
   "class": "AdjacentPanorama",
   "yaw": -5.9,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "backwardYaw": 149.6,
   "class": "AdjacentPanorama",
   "yaw": -6.93,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EB6F7DCD_E647_2976_41E0_3A09E20D7520",
  "this.overlay_F14A027E_E64B_1B12_41E0_619255D25C94",
  "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0049A204_0CA5_7EAD_41A0_C491AEDF19D6"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_009492DF_0CA5_7F5B_4187_C61B3CB6B8CB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.34,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00238190_0CA5_7DA4_4190_06720A7329EE"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00352199_0CA5_7DA7_419B_275E2E438C2F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00E3D30E_0CA5_7EBD_41A0_D5FB002DBA9F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_004A73B0_0CA5_7DE4_41A9_04633A079C40"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_075B60DB_0CA5_7B5B_419A_429C60DCB2D4"
},
{
 "thumbnailUrl": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_t.jpg",
 "class": "Panorama",
 "label": "12",
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -68.96,
   "class": "AdjacentPanorama",
   "yaw": -163.05,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -68.96,
   "class": "AdjacentPanorama",
   "yaw": -158,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": 131.26,
   "class": "AdjacentPanorama",
   "yaw": 45.02,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": 131.26,
   "class": "AdjacentPanorama",
   "yaw": 32.01,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": -142.82,
   "class": "AdjacentPanorama",
   "yaw": 135.51,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": -142.82,
   "class": "AdjacentPanorama",
   "yaw": 138.09,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "backwardYaw": 154.47,
   "class": "AdjacentPanorama",
   "yaw": -46.39,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "backwardYaw": 154.47,
   "class": "AdjacentPanorama",
   "yaw": -39.89,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EE5637CA_F37C_FE32_41D0_DB741DCF1D0A",
  "this.overlay_E9862826_F37D_F272_41D4_AB9AA9D819B5",
  "this.overlay_EE4508A2_F374_7272_41EE_0F4BBC2AB5DC",
  "this.overlay_EE5830A1_F374_526E_41E0_5F255EDD0CB8",
  "this.overlay_E23B607E_F227_724C_41E2_CF45BFC0CD4E",
  "this.overlay_E58D26F1_F261_7E54_41D6_177877F231FD",
  "this.overlay_E44F06B5_F267_1EDD_41BA_128AC83C00F5",
  "this.overlay_E5012374_F261_165C_41E2_26D991B3488F",
  "this.overlay_E5707ACD_F261_164D_41E4_54E6F0A81EA0",
  "this.overlay_E56CA583_F261_12B5_41E8_CCC2601B2FC6",
  "this.overlay_EACCB364_F261_367C_41CD_A12E896F212C",
  "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00FD9160_0CA5_7D64_41A3_9BF1A9B3E0EC"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00F5531E_0CA5_7EDC_419F_FFF74AD6A822"
},
{
 "thumbnailUrl": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_t.jpg",
 "class": "Panorama",
 "label": "4",
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -168.19,
   "class": "AdjacentPanorama",
   "yaw": -3.27,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -168.19,
   "class": "AdjacentPanorama",
   "yaw": -7.1,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "backwardYaw": 86.9,
   "class": "AdjacentPanorama",
   "yaw": -123.45,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "backwardYaw": 86.9,
   "class": "AdjacentPanorama",
   "yaw": -118.7,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": -90.35,
   "class": "AdjacentPanorama",
   "yaw": 132.02,
   "distance": 1
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": -90.35,
   "class": "AdjacentPanorama",
   "yaw": 149.22,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F255C89C_E647_3716_41D6_45837819D966",
  "this.overlay_F38CD3A1_E6C7_3931_41E1_0EB98EF0F045",
  "this.overlay_F2430522_E6D9_1932_41E0_AA4FB6421084",
  "this.overlay_F091E393_E6D9_7912_41EA_45A20199469E",
  "this.overlay_E49D9F8E_F14C_2E35_41E5_7B34560116A4",
  "this.overlay_E7523A64_F0B4_F6F6_41E1_7D70720821C7",
  "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00B8F121_0CA5_7AE4_419A_3DAEFDD6024C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0081312C_0CA5_7AFC_41A6_9BBFC4F70031"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_009DC141_0CA5_7AA4_4196_88C30CD94BC8"
},
{
 "thumbnailUrl": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_t.jpg",
 "class": "Panorama",
 "label": "3",
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": -123.45,
   "class": "AdjacentPanorama",
   "yaw": 86.9,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "backwardYaw": 0.5,
   "class": "AdjacentPanorama",
   "yaw": 169.83,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "backwardYaw": 0.5,
   "class": "AdjacentPanorama",
   "yaw": 175.79,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "backwardYaw": 0.5,
   "class": "AdjacentPanorama",
   "yaw": -170.47,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F4F0C3B9_E679_191E_41AD_D3ED7093F7DC",
  "this.overlay_F4CE9A68_E679_2B3E_41E4_186FFB14337C",
  "this.overlay_F23D53C9_E67F_797E_41DA_CEB9D31F7CB9",
  "this.overlay_F5F8AB23_E679_2932_41C6_B6096A418A96",
  "this.overlay_F57C432D_E67B_1936_41CE_C5BC49C02D77",
  "this.overlay_E5FE8C88_F17B_D23E_41DD_C0575B618CC1",
  "this.overlay_E593DD69_F17C_32FF_41DE_A8F0B4641D37",
  "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00AFA291_0CA5_7FA7_419B_382F06F31A4B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_000E537C_0CA5_7D5C_419C_695B3FF4AD0B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01CE909D_0CA5_7BDC_4189_85C7AFB2481A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_075F50DB_0CA5_7B5B_4198_0AE3A1B9D80C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_003A81A6_0CA5_7DED_41A2_CD29BA31B9F9"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_007B71F5_0CA5_7D6C_41A9_3A833B315046"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00FFE32D_0CA5_7EFF_4194_5A8A138EFE59"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_005F6214_0CA5_7EAD_4192_F22918A52822"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_00B2A115_0CA5_7AAF_419B_AAC5756B438C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.87,
  "pitch": -0.06,
  "hfov": 127
 },
 "class": "PanoramaCamera",
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_camera"
},
{
 "thumbnailUrl": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_t.jpg",
 "class": "Panorama",
 "label": "1",
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D",
   "backwardYaw": -5.9,
   "class": "AdjacentPanorama",
   "yaw": 149.6,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D",
   "backwardYaw": -5.9,
   "class": "AdjacentPanorama",
   "yaw": -166.56,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D",
   "backwardYaw": -5.9,
   "class": "AdjacentPanorama",
   "yaw": 178.03,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "backwardYaw": 175.93,
   "class": "AdjacentPanorama",
   "yaw": -7.03,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EBE0BCC9_E65B_2F71_41C7_EB06380EFCE9",
  "this.overlay_E852FDA3_E659_2932_41E1_4BC810D66EEE",
  "this.overlay_E9056477_E65F_1F11_41E8_BAF685334FD5",
  "this.overlay_FEC3CD92_E64B_2912_41E9_323073D95A3F",
  "this.overlay_F1AA7EA8_E649_2B3E_41CC_9087B60C1C42",
  "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_009FC2FE_0CA5_7F5D_41A8_B40B6C1741BD"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": -2.45,
   "targetStereographicFactor": 0,
   "duration": 3000
  }
 ],
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": -2.34,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.34,
  "pitch": -2.45
 },
 "class": "PanoramaCamera",
 "id": "panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_008D72D0_0CA5_7FA4_4175_A49FB8DF5EFA"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_001CA387_0CA5_7DAC_41A3_657D91FC6238"
},
{
 "thumbnailUrl": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_t.jpg",
 "class": "Panorama",
 "label": "8",
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": 172.21,
   "class": "AdjacentPanorama",
   "yaw": -14.93,
   "distance": 1
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": 172.21,
   "class": "AdjacentPanorama",
   "yaw": -13.31,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": -3.27,
   "class": "AdjacentPanorama",
   "yaw": -168.19,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": -3.27,
   "class": "AdjacentPanorama",
   "yaw": 171.33,
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": -3.27,
   "class": "AdjacentPanorama",
   "yaw": -169.54,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E62C4CCA_F0BC_5232_41E1_B4A5D241D42A",
  "this.overlay_E9E9F7F7_F0BC_5DD2_4184_2E5977F5F29F",
  "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_tcap0",
  "this.overlay_1B4C2FBA_0BEC_E9EF_41A3_E6BA431B5FC6",
  "this.overlay_04A8EEED_0BED_AB6A_4188_732570EF4EE4",
  "this.overlay_1B12F264_0BEB_7A9B_4186_FBD23A2FBFC4"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_008A3136_0CA5_7AEC_418C_6D885A3F5BB6"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_01AE6233_0CA5_7EEB_41A3_97EB8816C119"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 400,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "bottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_00DF9183_0CA5_7DA4_41A0_3150715B6600); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E65A9820_F0D4_D26D_4190_88B35F159298",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 162
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.21,
   "hfov": 64.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_00352199_0CA5_7DA7_419B_275E2E438C2F); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E998D320_F0DC_D66D_41B4_B90D91064136",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_3_1_0_map.gif",
      "width": 159,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.51,
   "hfov": 53.06
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_E807D8B4_F0CC_7256_41BB_67CABB23142B",
   "pitch": -13.38,
   "yaw": -98.21,
   "hfov": 8.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EAA49BC9_F0DC_363F_41EA_7CD00897199A",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.38,
   "hfov": 8.1
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_E807F8B4_F0CC_7256_41DC_24C6BA3BADC9",
   "pitch": -11.37,
   "yaw": -55.5,
   "hfov": 8.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_000F91BA_0CA5_7DE5_4195_4447B7A8D499); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EBA81ADA_F0DC_D7DD_41BD_F1BBD5CF5CED",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.37,
   "hfov": 8.16
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5B84DB_F223_1254_41DB_D625C00035F2",
   "pitch": -26.44,
   "yaw": -62.54,
   "hfov": 7.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_003A81A6_0CA5_7DED_41A2_CD29BA31B9F9); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EAE1CF24_F21F_2FFC_41CD_4AC7A2B73E22",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_7_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.44,
   "hfov": 7.46
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5B54DB_F223_1254_41CC_84DCB0457273",
   "pitch": -19.41,
   "yaw": 5.04,
   "hfov": 7.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_00238190_0CA5_7DA4_4190_06720A7329EE); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E50BD41B_F21F_31D4_41C0_47B69F79630C",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_8_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.41,
   "hfov": 7.85
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_ED963F7D_F261_2E4C_41CF_900DE276E32E",
   "pitch": 3.71,
   "yaw": 172.21,
   "hfov": 9.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_00FD9160_0CA5_7D64_41A3_9BF1A9B3E0EC); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EBC4A709_F221_1FB5_41C7_B8AEF9C70B64",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.71,
   "hfov": 9.53
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_00C1A16F_0CA5_7D7C_4195_49B1E2A11785); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EA4CD800_F221_31B3_41E0_CADB55C030DA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_10_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "hfov": 30.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_00D5A178_0CA5_7D64_41A8_150F99566141); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EB8EB2F5_F223_165D_41D5_B3AA429062A3",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_11_1_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.82,
   "hfov": 16.81
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_001241C9_0CA5_7DA6_41A1_15CA047EC846); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E91B0BE8_F0D4_35FE_41EB_904E45241F77",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_1_1_0_map.gif",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.14,
   "hfov": 32.25
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_006701D6_0CA5_7DAC_4184_00E730E15B10); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EB523FB0_F0D4_EE6E_41D8_151ABE741474",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.91,
   "hfov": 41.31
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_007471E5_0CA5_7D6F_4196_92ECED511D33); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E89D3040_F0D5_D22E_41B9_1BDC16562082",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_4_1_0_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "hfov": 28.2
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5A24DC_F223_124C_41DF_FAF57926A40A",
   "pitch": -10,
   "yaw": -131.41,
   "hfov": 8.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_0049A204_0CA5_7EAD_41A0_C491AEDF19D6); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EBD507BE_F0D4_5E52_41E7_D00851EA4F8A",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10,
   "hfov": 8.76
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5DD4DC_F223_124C_41DD_ADDB8AEE18CD",
   "pitch": -21.17,
   "yaw": -146.95,
   "hfov": 10.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_007B71F5_0CA5_7D6C_41A9_3A833B315046); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E51B41DF_F263_324C_41E9_811B3E6A0353",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_6_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.17,
   "hfov": 10.11
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5D64DC_F223_124C_41CA_15285FB41733",
   "pitch": -16.16,
   "yaw": 158.52,
   "hfov": 5.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EAFA5D33_F263_13D4_41EB_CE40535C65B9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_7_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.16,
   "hfov": 5.55
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EDA88F7F_F261_2E4C_41D1_6242C0A42390",
   "pitch": 0.55,
   "yaw": 169.32,
   "hfov": 3.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EA43D0D2_F221_1254_41E8_3F262F23FABA",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.55,
   "hfov": 3.25
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_F2519518_E679_391E_41DF_2C50B651C871",
   "pitch": -33.33,
   "yaw": 175.93,
   "hfov": 3.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_00F5531E_0CA5_7EDC_419F_FFF74AD6A822); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FFA8E91E_E649_6912_41EA_25F93DB663F0",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.33,
   "hfov": 3.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_00FFE32D_0CA5_7EFF_4194_5A8A138EFE59); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FF378CE7_E649_2F32_41E6_C8A4DB437805",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_1_1_0_map.gif",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.77,
   "hfov": 30.56
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_F2500518_E679_391E_41D9_D311D06AF959",
   "pitch": -0.87,
   "yaw": 2.86,
   "hfov": 7.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FFD33961_E647_292E_41E2_4E840151C994",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.87,
   "hfov": 7.61
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_00C3B33A_0CA5_7EE5_41A8_3B525528C171); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FFF1E0C5_E647_3776_41CE_BCBE0F5E2671",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_3_1_0_map.gif",
      "width": 184,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.61,
   "hfov": 38.09
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_E975E305_F262_F7BD_41E7_8B19253A6931",
   "pitch": -16.4,
   "yaw": 82.62,
   "hfov": 8.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_01905253_0CA5_7EA4_41A1_CE63ACA79F52); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E7602CC4_F263_12BC_41CC_E94B04E3DF22",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.4,
   "hfov": 8.62
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_E9757306_F262_F7BF_41D6_367717E1421C",
   "pitch": -23.8,
   "yaw": 154.47,
   "hfov": 11.66,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_01BC9233_0CA5_7EEB_41A8_7B8D8C47A647); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E77D67F9_F261_3E55_41D9_F4D8152FB2A5",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.8,
   "hfov": 11.66
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_E4C8935E_F262_F64C_41D8_E9E4AAE1AC82",
   "pitch": -9.62,
   "yaw": 144.32,
   "hfov": 8.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_005F6214_0CA5_7EAD_4192_F22918A52822); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E72758A0_F261_12F4_41AB_217536E83188",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.62,
   "hfov": 8.35
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_01E03253_0CA5_7EA4_41A3_3513A28BE6E4); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E482B904_F27F_33BC_41EE_1654AE186CFB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_3_1_0_map.gif",
      "width": 163,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.04,
   "hfov": 34.64
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_01839243_0CA5_7EA4_419E_D5FA4C763B44); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E49EBE0C_F27F_11B3_4192_C7906B82EEAC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_4_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.36,
   "hfov": 34.3
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_01AE6233_0CA5_7EEB_41A3_97EB8816C119); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E4E3FC0B_F261_F1B4_41EC_E34EB27B5570",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_5_1_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.07,
   "hfov": 24.78
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_00B5A10A_0CA5_7AA5_417E_387819F4CE76); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E1218EF8_F221_EE54_41EA_CEEFCF71EEBF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.96,
   "hfov": 46.4
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_00A160EB_0CA5_7B64_417F_314F7A99DAAA); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E17FDDD4_F221_1253_41CE_EFDE082CE36C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_4_1_0_map.gif",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "hfov": 18.84
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_00B2A115_0CA5_7AAF_419B_AAC5756B438C); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E7FE903B_F263_11D4_41EE_2C8A1671F162",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_5_1_0_map.gif",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.79,
   "hfov": 47.41
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE2324DF_F223_124C_41E0_3F2C0A47CB50",
   "pitch": -16.02,
   "yaw": -167.55,
   "hfov": 7.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_0081312C_0CA5_7AFC_41A6_9BBFC4F70031); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EAF7AC82_F21E_F2B4_41D6_3D2FE0149904",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_6_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02,
   "hfov": 7.52
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE22E4DF_F223_124C_4188_EE6875D4E164",
   "pitch": -22.04,
   "yaw": 133.54,
   "hfov": 7.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_00B8F121_0CA5_7AE4_419A_3DAEFDD6024C); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EAA2322C_F221_71F3_41EB_6850C713CF1D",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_7_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.04,
   "hfov": 7.48
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE2284DF_F223_124C_41E8_C0422EB6CBDB",
   "pitch": -10.24,
   "yaw": 122.11,
   "hfov": 3.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_00AE30FB_0CA5_7B64_4173_7CAB8A28E098); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EAB6E883_F221_12B5_41D1_8306A5AA4E0B",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_8_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.24,
   "hfov": 3.74
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_F9345D69_E839_B2BB_41C3_F0902D2CD9CD",
   "pitch": -15.86,
   "yaw": 44.43,
   "hfov": 5.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_01F66262_0CA5_7F65_41A8_CFD19C3EFCD0); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E5C5F71F_E826_7E97_41A2_D36B77CAF576",
 "data": {
  "label": "Circle 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.86,
   "hfov": 5.04
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_01C62272_0CA5_7F64_41A2_F85701EF077C); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E5F579AB_E826_95B8_41BA_814E75F81412",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_1_1_0_map.gif",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.79,
   "hfov": 45.9
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E798AE19_E83A_8E9B_41BF_D0CD0C67E1A4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_2_1_0_map.gif",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "hfov": 20.02
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_F90B8D69_E839_B2BB_41DF_068371605097",
   "pitch": -10.17,
   "yaw": 77.68,
   "hfov": 3.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E73FED1F_E83B_B297_41E4_379B1ED0B380",
 "data": {
  "label": "Circle 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.17,
   "hfov": 3.64
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_FFA01F6B_E6CB_2931_41D1_F5A31E46E3F2",
   "pitch": -34.48,
   "yaw": -90.35,
   "hfov": 10.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_008A3136_0CA5_7AEC_418C_6D885A3F5BB6); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F372935F_E6DB_1912_41E1_A9A50BC3092A",
 "data": {
  "label": "Circle 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.48,
   "hfov": 10.3
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_009DC141_0CA5_7AA4_4196_88C30CD94BC8); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F3C35AC2_E6D9_EB72_41CB_52727B8D05DA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 187
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48,
   "hfov": 92.77
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_FFA08F6B_E6CB_2931_41C2_A894205B6B63",
   "pitch": -16.92,
   "yaw": 38.46,
   "hfov": 6.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6, this.camera_00E7814C_0CA5_7ABC_4153_CE527809FCA6); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F35B4673_E6D9_3B12_41E6_6D942D653E62",
 "data": {
  "label": "Circle 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.92,
   "hfov": 6.15
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6, this.camera_00EA7156_0CA5_7AAC_4171_1BB9D3CD851A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F0B73EAE_E6C9_2B32_41BE_A45DB6F00C5F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_3_1_0_map.gif",
      "width": 163,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45,
   "hfov": 37.56
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E7E3E5BF_F0B4_7253_41E9_81B0692BA6DB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.32,
   "hfov": 65.61
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_E80638B1_F0CC_726E_41EA_E50ACE495F37",
   "pitch": -13.75,
   "yaw": -32.64,
   "hfov": 5.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E7F1B50E_F0B4_3235_41E3_B4B9071911ED",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.75,
   "hfov": 5.16
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E3F1B5DE_F223_124C_41EA_3A2EEE54E7E4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 148
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91,
   "hfov": 66.2
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E2F633BC_F223_16CC_41E7_54695B4EB8B4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_5_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.59,
   "hfov": 74.48
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E05D49D2_F222_F254_41D8_1C4966A460A8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_6_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.43,
   "hfov": 38.38
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE2104DE_F223_124C_41E0_55E403B6F018",
   "pitch": -25.03,
   "yaw": 66.32,
   "hfov": 8.67,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E53DE815_F267_11DD_41D4_91DD49C4C392",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_7_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.03,
   "hfov": 8.67
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE20A4DE_F223_124C_41DF_B2D4BB056EC3",
   "pitch": -24.92,
   "yaw": -57.77,
   "hfov": 8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E50CF6B5_F266_FEDC_41D6_53B81E0E4E10",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_8_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.92,
   "hfov": 8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE2054DE_F223_124C_41C6_D6436942DEC1",
   "pitch": -12.22,
   "yaw": -153.91,
   "hfov": 7.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E518569B_F261_1ED4_41D0_23E5AC8FBB9E",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_9_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.22,
   "hfov": 7.78
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_075F50DB_0CA5_7B5B_4198_0AE3A1B9D80C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EB6F7DCD_E647_2976_41E0_3A09E20D7520",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_1_HS_0_1_0_map.gif",
      "width": 186,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.44,
   "hfov": 62.77
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_FA7A4552_E648_F912_41D8_6CED06E3D3C6",
   "pitch": -19.55,
   "yaw": -6.93,
   "hfov": 5.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_075B60DB_0CA5_7B5B_419A_429C60DCB2D4); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F14A027E_E64B_1B12_41E0_619255D25C94",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.55,
   "hfov": 5.02
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_00AFA291_0CA5_7FA7_419B_382F06F31A4B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EE5637CA_F37C_FE32_41D0_DB741DCF1D0A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_1_1_0_map.gif",
      "width": 131,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "hfov": 34.38
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5CF4DC_F223_124C_41D1_0135FFCD526A",
   "pitch": -0.85,
   "yaw": -144.22,
   "hfov": 4.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E9862826_F37D_F272_41D4_AB9AA9D819B5",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.85,
   "hfov": 4.87
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EE4508A2_F374_7272_41EE_0F4BBC2AB5DC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.37,
   "hfov": 59.01
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_00B712A1_0CA5_7FE4_41A2_C3C3C0367F1F); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EE5830A1_F374_526E_41E0_5F255EDD0CB8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_6_1_0_map.gif",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.16,
   "hfov": 29.98
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_008D72D0_0CA5_7FA4_4175_A49FB8DF5EFA); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E23B607E_F227_724C_41E2_CF45BFC0CD4E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_8_1_0_map.gif",
      "width": 113,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.22,
   "hfov": 28.03
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5FC4DD_F223_124C_41E6_7AAF37EB2F07",
   "pitch": -16.27,
   "yaw": 135.51,
   "hfov": 10.96,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_00BAD2B0_0CA5_7FE5_4191_B5F2E6B73AF6); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E58D26F1_F261_7E54_41D6_177877F231FD",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_9_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27,
   "hfov": 10.96
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_0087D2C0_0CA5_7FA4_4184_2013AEB5B1C0); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E44F06B5_F267_1EDD_41BA_128AC83C00F5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_10_1_0_map.gif",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.35,
   "hfov": 67.39
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5F54DD_F223_124C_41D4_D12F07CE8EE1",
   "pitch": -29.85,
   "yaw": -4.96,
   "hfov": 10.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E5012374_F261_165C_41E2_26D991B3488F",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_11_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.85,
   "hfov": 10.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5EE4DD_F223_124C_41DF_23ACADF1D2EC",
   "pitch": -17.12,
   "yaw": 32.01,
   "hfov": 7.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_00BC92B0_0CA5_7FE5_4181_0ED07643A337); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E5707ACD_F261_164D_41E4_54E6F0A81EA0",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_12_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.12,
   "hfov": 7.48
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5E64DD_F223_124C_41DF_0AC896D4CB7C",
   "pitch": -18.24,
   "yaw": -39.89,
   "hfov": 5.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_009492DF_0CA5_7F5B_4187_C61B3CB6B8CB); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E56CA583_F261_12B5_41E8_CCC2601B2FC6",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_13_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.24,
   "hfov": 5.63
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5E24DE_F223_124C_41E3_CBA98CFF7E2B",
   "pitch": -16.89,
   "yaw": -158,
   "hfov": 7.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_00AAB2A1_0CA5_7FE4_4195_332580040776); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EACCB364_F261_367C_41CD_A12E896F212C",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_14_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89,
   "hfov": 7.49
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_FE59C8B7_E6C9_1712_41D3_7D4F8B608321",
   "pitch": -21.12,
   "yaw": -123.45,
   "hfov": 6.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_00673392_0CA5_7DA4_41A0_04E90317B8A6); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F255C89C_E647_3716_41D6_45837819D966",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.12,
   "hfov": 6.59
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_0076039C_0CA5_7DDC_4187_0520FE0BAC20); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F38CD3A1_E6C7_3931_41E1_0EB98EF0F045",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_3_1_0_map.gif",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.61,
   "hfov": 49.58
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_0044A3A6_0CA5_7DEC_41A4_4CAC64B36AA0); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F2430522_E6D9_1932_41E0_AA4FB6421084",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_5_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "hfov": 94.79
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_FAFFF0B1_EB47_4B66_41DA_E9857700C52D",
   "pitch": -25.11,
   "yaw": 149.22,
   "hfov": 6.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_004A73B0_0CA5_7DE4_41A9_04633A079C40); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F091E393_E6D9_7912_41EA_45A20199469E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_7_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.11,
   "hfov": 6.16
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_000E537C_0CA5_7D5C_419C_695B3FF4AD0B); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E49D9F8E_F14C_2E35_41E5_7B34560116A4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_9_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 187
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.39,
   "hfov": 82.94
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EBF22732_F0B4_5E52_41EA_6D4C1716294D",
   "pitch": -23.43,
   "yaw": -7.1,
   "hfov": 7.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_001CA387_0CA5_7DAC_41A3_657D91FC6238); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E7523A64_F0B4_F6F6_41E1_7D70720821C7",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_10_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.43,
   "hfov": 7.95
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_009FC2FE_0CA5_7F5D_41A8_B40B6C1741BD); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F4F0C3B9_E679_191E_41AD_D3ED7093F7DC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_0_1_0_map.gif",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.03,
   "hfov": 21.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_F0278995_E648_E916_41E3_1D5714A356F8",
   "pitch": -30.02,
   "yaw": 175.79,
   "hfov": 4.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_00E492FE_0CA5_7F5D_41A5_9BF6F5930887); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F4CE9A68_E679_2B3E_41E4_186FFB14337C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.02,
   "hfov": 4.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_00E3D30E_0CA5_7EBD_41A0_D5FB002DBA9F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F23D53C9_E67F_797E_41DA_CEB9D31F7CB9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_2_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.21,
   "hfov": 20.78
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_F0271995_E648_E916_41B1_13FC97DEE13C",
   "pitch": -24.93,
   "yaw": 90.1,
   "hfov": 5.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_F5F8AB23_E679_2932_41C6_B6096A418A96",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.93,
   "hfov": 5.4
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_009052EF_0CA5_7F7C_419A_C044EDB21924); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F57C432D_E67B_1936_41CE_C5BC49C02D77",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_4_1_0_map.gif",
      "width": 192,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.3,
   "hfov": 37.07
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E5FE8C88_F17B_D23E_41DD_C0575B618CC1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_1_HS_7_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.9,
   "hfov": 67.87
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_EBF5A731_F0B4_5E6E_41D8_7144E0B501A0",
   "pitch": -14.38,
   "yaw": 22.3,
   "hfov": 8.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E593DD69_F17C_32FF_41DE_A8F0B4641D37",
 "data": {
  "label": "Circle 03b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.38,
   "hfov": 8.92
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_01C4908D_0CA5_7BBF_41A8_4DE4B2FE4792); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_EBE0BCC9_E65B_2F71_41C7_EB06380EFCE9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_0_1_0_map.gif",
      "width": 148,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.11,
   "hfov": 62.31
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_01CE909D_0CA5_7BDC_4189_85C7AFB2481A); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E852FDA3_E659_2932_41E1_4BC810D66EEE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_1_1_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95,
   "hfov": 28.22
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_075380CC_0CA5_7BBC_416B_F4B63E82E4FC); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E9056477_E65F_1F11_41E8_BAF685334FD5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 187
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.28,
   "hfov": 27.23
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_FA796552_E648_F912_41E4_000E9B6922DD",
   "pitch": -1.55,
   "yaw": -6.08,
   "hfov": 5.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_FEC3CD92_E64B_2912_41E9_323073D95A3F",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.55,
   "hfov": 5.46
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_FA792552_E648_F912_41EB_C8727674C6A3",
   "pitch": -26.86,
   "yaw": 178.03,
   "hfov": 3.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_01D7D09D_0CA5_7BDC_41A2_B349607E9D44); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_F1AA7EA8_E649_2B3E_41CC_9087B60C1C42",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.86,
   "hfov": 3.51
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_FECED969_F21F_3275_41EC_54E67DE2AD8A",
   "pitch": 1.93,
   "yaw": -14.93,
   "hfov": 8.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_00D5C345_0CA5_7EAF_4195_5FF49FF362FC); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E62C4CCA_F0BC_5232_41E1_B4A5D241D42A",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.93,
   "hfov": 8.07
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_00D99350_0CA5_7EA5_4187_DA089F988A7E); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_E9E9F7F7_F0BC_5DD2_4184_2E5977F5F29F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_1_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.08,
   "hfov": 31.3
  }
 ]
},
{
 "angle": 0,
 "distance": 33.82,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 46.5
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_0023135B_0CA5_7D5B_4171_3CD1A3DF2E78); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1B4C2FBA_0BEC_E9EF_41A3_E6BA431B5FC6",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_2_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44,
   "hfov": 24.04
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_0037E366_0CA5_7D6D_41A1_6629256DB4B9); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_04A8EEED_0BED_AB6A_4188_732570EF4EE4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_3_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.7,
   "hfov": 34.41
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_1AE638BE_0BE5_57E6_4191_362F35CCEF15",
   "pitch": 5.81,
   "yaw": -169.54,
   "hfov": 8.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_003BE371_0CA5_7D64_41A5_6A1273894964); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_1B12F264_0BEB_7A9B_4186_FBD23A2FBFC4",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.81,
   "hfov": 8.86
  }
 ]
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E807D8B4_F0CC_7256_41BB_67CABB23142B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E807F8B4_F0CC_7256_41DC_24C6BA3BADC9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5B84DB_F223_1254_41DB_D625C00035F2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5B54DB_F223_1254_41CC_84DCB0457273",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_ED963F7D_F261_2E4C_41CF_900DE276E32E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5A24DC_F223_124C_41DF_FAF57926A40A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5DD4DC_F223_124C_41DD_ADDB8AEE18CD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5D64DC_F223_124C_41CA_15285FB41733",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EDA88F7F_F261_2E4C_41D1_6242C0A42390",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2519518_E679_391E_41DF_2C50B651C871",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2500518_E679_391E_41D9_D311D06AF959",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E975E305_F262_F7BD_41E7_8B19253A6931",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E9757306_F262_F7BF_41D6_367717E1421C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E4C8935E_F262_F64C_41D8_E9E4AAE1AC82",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE2324DF_F223_124C_41E0_3F2C0A47CB50",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE22E4DF_F223_124C_4188_EE6875D4E164",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE2284DF_F223_124C_41E8_C0422EB6CBDB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9345D69_E839_B2BB_41C3_F0902D2CD9CD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F90B8D69_E839_B2BB_41DF_068371605097",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFA01F6B_E6CB_2931_41D1_F5A31E46E3F2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFA08F6B_E6CB_2931_41C2_A894205B6B63",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E80638B1_F0CC_726E_41EA_E50ACE495F37",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE2104DE_F223_124C_41E0_55E403B6F018",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE20A4DE_F223_124C_41DF_B2D4BB056EC3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE2054DE_F223_124C_41C6_D6436942DEC1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EDA86099_E64F_371E_41EA_4048F9685E6D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FA7A4552_E648_F912_41D8_6CED06E3D3C6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5CF4DC_F223_124C_41D1_0135FFCD526A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5FC4DD_F223_124C_41E6_7AAF37EB2F07",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5F54DD_F223_124C_41D4_D12F07CE8EE1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5EE4DD_F223_124C_41DF_23ACADF1D2EC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_13_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5E64DD_F223_124C_41DF_0AC896D4CB7C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_14_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5E24DE_F223_124C_41E3_CBA98CFF7E2B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FE59C8B7_E6C9_1712_41D3_7D4F8B608321",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FAFFF0B1_EB47_4B66_41DA_E9857700C52D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EBF22732_F0B4_5E52_41EA_6D4C1716294D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F0278995_E648_E916_41E3_1D5714A356F8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F0271995_E648_E916_41B1_13FC97DEE13C",
 "frameDuration": 66
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EBF5A731_F0B4_5E6E_41D8_7144E0B501A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FA796552_E648_F912_41E4_000E9B6922DD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FA792552_E648_F912_41EB_C8727674C6A3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FECED969_F21F_3275_41EC_54E67DE2AD8A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1AE638BE_0BE5_57E6_4191_362F35CCEF15",
 "frameDuration": 41
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
