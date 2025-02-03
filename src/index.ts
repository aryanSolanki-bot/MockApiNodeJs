import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.json({status:200,data: {
        _id: "679376e7e403871b8983f129",
        copyright: {
            content: "© Flamingos Technologies Inc., 2024. All Rights Reserved.",
            show: true
        },
        created_at: 1737717479543,
            experiences: [
                {
                    aspect_ratio: 0.677449168207024,
                    campaign_id: "679376e7e403871b8983f129",
                    canvas: {
                        android: 0,
                        ios: 2100
                    },
                    created_at: 1737717520018,
                    id: "67937710e403871b8983f12c",
                    images: {
                        color_compressed: "https://storage.googleapis.com/zingcam-dev/compressed/images/67937710e403871b8983f12c_660963255.jpg",
                        compressed: "https://storage.googleapis.com/zingcam-dev/grey/images/67937710e403871b8983f12c_666422195.jpg",
                        feature_image: "https://storage.googleapis.com/zingcam/images/67937711819178744c583fcb.jpg",
                        original: "https://storage.googleapis.com/zingcam-dev/original/images/fnr694sult41b6y4zp33bky8.png",
                        std_compressed: "https://storage.googleapis.com/zingcam-dev/compressed/images/67937710e403871b8983f12c_759160564.png"
                    },
                    is_active: true,
                    mask: {
                        compressed_url: "https://storage.googleapis.com/zingcam/original/images/wsqata0ogv4zuil8z597ad5i.png",
                        offset: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        rotation: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        scale: 1,
                        url: "https://storage.googleapis.com/zingcam/original/images/wsqata0ogv4zuil8z597ad5i.png"
                    },
                    overlay: {
                        compressed_image: "https://zingcam.cdn.flamapp.com/compressed/images/678f79082aea7b5a1427039f_374675861.jpg",
                        type: "IMAGE",
                        value: ""
                    },
                    playback_scale: 1,
                    rewards: {
                        enabled: false
                    },
                    status: "PROCESSED",
                    ui_elements: {
                        banners: {
                            primary_color: "#ffffff",
                            secondary_color: "#007AFF",
                            variant: 0
                        }
                    },
                    updated_at: 1737717652018,
                    variant: {
                        class: 1,
                        is_horizontal: true,
                        offset: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        scale: 1,
                        scale_axis: {
                            x: 1.6,
                            y: 2.84,
                            z: 0
                        },
                        track_type: "CARD"
                    },videos: {
                        compressed: "https://storage.googleapis.com/zingcam-dev/compressed/videos/67937710e403871b8983f12c_924865945.mp4",
                        compressed_playback: "https://storage.googleapis.com/zingcam-dev/compressed/videos/67937710e403871b8983f12c_924865945.mp4",
                        dash: "https://storage.googleapis.com/zingcam-dev/stream/67937710e403871b8983f12c_348705389/dash/master.mpd",
                        hls: "https://storage.googleapis.com/zingcam-dev/stream/67937710e403871b8983f12c_664537291/hls/master.m3u8",
                        original: "https://storage.googleapis.com/zingcam-dev/original/videos/r31z0y96ob4qech1izz61454.mp4"
                    }
    }],
    feature_flags: {
        enable_adaptive_streaming: true,
        enable_android_streaming: true,
        enable_geo_videos: false,
        enable_ios_streaming: true,
        enable_nextar: true,
        enable_qr_button: false,
        enable_recording: false,
        enable_screen_capture: true,
        enable_video_fullscreen: false
    },
    flam_logo: "https://storage.googleapis.com/zingcam/gixib4gxg8vsjirl0bxdo27y.png",
            id: "679376e7e403871b8983f129",
            logo_width: 1,
            name: "New Json mask",
            publish: false,
            scan: {
                compressed_image_url: "https://storage.googleapis.com/zingcam-dev/compressed/images/67937710e403871b8983f12c_660963255.jpg",
                image_url: "https://storage.googleapis.com/zingcam-dev/original/images/fnr694sult41b6y4zp33bky8.png",
                scan_text: "SCAN THIS IMAGE"
            },
            short_code: "u14b4c",
            status: "PROCESSED",
            track_type: "CARD",
            updated_at: 1737717522726
}})
})

app.get("/devCardWithMaskAndOverlay",(req,res)=>{
    res.json({status:200,
        data:{
           _id:"67987fcb7ca05dc417b8cb3e",
           copyright:{
              content:"© Flamingos Technologies Inc., 2024. All Rights Reserved.",
              show:true
           },
           created_at:1738047435756,
           experiences:[
              {
                 aspect_ratio:1.7777777777777777,
                 campaign_id:"67987fcb7ca05dc417b8cb3e",
                 canvas:{
                    android:0,
                    ios:2100
                 },
                 created_at:1738047436355,
                 id:"67987fcc7ca05dc417b8cb3f",
                 images:{
                    color_compressed:"https://storage.googleapis.com/zingcam-dev/compressed/images/67987fcc7ca05dc417b8cb3f_21393135.jpg",
                    compressed:"https://storage.googleapis.com/zingcam-dev/grey/images/67987fcc7ca05dc417b8cb3f_18288455.jpg",
                    feature_image:"https://storage.googleapis.com/zingcam/images/6798807ba2163d3ad42fd5b0.jpg",
                    original:"https://storage.googleapis.com/zingcam-dev/original/images/k3jwwgbzqj6bzvucq9p2h3m9.png",
                    std_compressed:"https://storage.googleapis.com/zingcam-dev/compressed/images/67987fcc7ca05dc417b8cb3f_312633581.png"
                 },
                 is_active:true,
                 mask:{
                    compressed_url:"https://storage.googleapis.com/zingcam-dev/mask/image/67987fcc7ca05dc417b8cb3f_820275835.png",
                    offset:{
                       x:0,
                       y:0,
                       z:0
                    },
                    scale:1,
                    url:"https://storage.googleapis.com/zingcam-dev/mask/image/67987fcc7ca05dc417b8cb3f_820275835.png"
                 },
                 overlay:{
                    compressed_image:"https://storage.googleapis.com/zingcam-dev/compressed/images/67987fcc7ca05dc417b8cb3f_21393135.jpg",
                    type:"IMAGE",
                    value:"https://storage.googleapis.com/zingcam-dev/original/images/x2a06ymzpt5nj0rfnpu2nsk0.jpg"
                 },
                 playback_scale:1,
                 rewards:{
                    enabled:false
                 },
                 status:"PROCESSED",
                 template_details:{
                    class:0,
                    enable_background:true,
                    enable_mask:true,
                    track_type:"CARD"
                 },
                 ui_elements:{
                    banners:{
                       primary_color:"#FFFFFF",
                       secondary_color:"#007AFF",
                       variant:0
                    }
                 },
                 updated_at:1738047646849,
                 variant:{
                    class:0,
                    offset:{
                       x:0,
                       y:0,
                       z:0
                    },
                    scale:1,
                    scale_axis:{
                       x:0.78,
                       y:2.08,
                       z:0
                    },
                    track_type:"CARD"
                 },
                 videos:{
                    compressed:"https://storage.googleapis.com/zingcam-dev/compressed/videos/67987fcc7ca05dc417b8cb3f_67426884.mp4",
                    compressed_playback:"https://storage.googleapis.com/zingcam-dev/compressed/videos/67987fcc7ca05dc417b8cb3f_67426884.mp4",
                    dash:"https://storage.googleapis.com/zingcam-dev/stream/67987fcc7ca05dc417b8cb3f_630632494/dash/master.mpd",
                    hls:"https://storage.googleapis.com/zingcam-dev/stream/67987fcc7ca05dc417b8cb3f_399402896/hls/master.m3u8",
                    original:"https://storage.googleapis.com/zingcam-dev/original/videos/tm9rlc1btyqeez9ndqp1wx5r.mp4"
                 }
              }
           ],
           feature_flags:{
              enable_adaptive_streaming:true,
              enable_android_streaming:true,
              enable_geo_videos:false,
              enable_ios_streaming:true,
              enable_nextar:true,
              enable_qr_button:false,
              enable_recording:false,
              enable_screen_capture:true,
              enable_video_fullscreen:true
           },
           flam_logo:"https://storage.googleapis.com/zingcam/gixib4gxg8vsjirl0bxdo27y.png",
           id:"67987fcb7ca05dc417b8cb3e",
           logo_width:1,
           name:"Fill Video Test 4",
           publish:true,
           scan:{
              compressed_image_url:"https://storage.googleapis.com/zingcam-dev/compressed/images/67987fcc7ca05dc417b8cb3f_21393135.jpg",
              image_url:"https://storage.googleapis.com/zingcam-dev/original/images/k3jwwgbzqj6bzvucq9p2h3m9.png",
              scan_text:"SCAN THIS IMAGE"
           },
           short_code:"n9tgz3",
           status:"PROCESSED",
           track_type:"CARD",
           updated_at:1738047613161
        },
        error:false
     })
})

app.get("/devCardNone",(req,res)=>{
    res.json({status:200,
        data:{
           _id:"67987fcb7ca05dc417b8cb3e",
           copyright:{
              content:"© Flamingos Technologies Inc., 2024. All Rights Reserved.",
              show:true
           },
           created_at:1738047435756,
           experiences:[
              {
                 aspect_ratio:1.7777777777777777,
                 campaign_id:"67987fcb7ca05dc417b8cb3e",
                 canvas:{
                    android:0,
                    ios:2100
                 },
                 created_at:1738047436355,
                 id:"67987fcc7ca05dc417b8cb3f",
                 images:{
                    color_compressed:"https://storage.googleapis.com/zingcam-dev/compressed/images/67987fcc7ca05dc417b8cb3f_21393135.jpg",
                    compressed:"https://storage.googleapis.com/zingcam-dev/grey/images/67987fcc7ca05dc417b8cb3f_18288455.jpg",
                    feature_image:"https://storage.googleapis.com/zingcam/images/6798807ba2163d3ad42fd5b0.jpg",
                    original:"https://storage.googleapis.com/zingcam-dev/original/images/k3jwwgbzqj6bzvucq9p2h3m9.png",
                    std_compressed:"https://storage.googleapis.com/zingcam-dev/compressed/images/67987fcc7ca05dc417b8cb3f_312633581.png"
                 },
                 is_active:true,
                 playback_scale:1,
                 rewards:{
                    enabled:false
                 },
                 status:"PROCESSED",
                 template_details:{
                    class:0,
                    enable_background:true,
                    enable_mask:true,
                    track_type:"CARD"
                 },
                 ui_elements:{
                    banners:{
                       primary_color:"#FFFFFF",
                       secondary_color:"#007AFF",
                       variant:0
                    }
                 },
                 updated_at:1738047646849,
                 variant:{
                    class:0,
                    offset:{
                       x:0,
                       y:0,
                       z:0
                    },
                    scale:1,
                    scale_axis:{
                       x:0.78,
                       y:2.08,
                       z:0
                    },
                    track_type:"CARD"
                 },
                 videos:{
                    compressed:"https://storage.googleapis.com/zingcam-dev/compressed/videos/67987fcc7ca05dc417b8cb3f_67426884.mp4",
                    compressed_playback:"https://storage.googleapis.com/zingcam-dev/compressed/videos/67987fcc7ca05dc417b8cb3f_67426884.mp4",
                    dash:"https://storage.googleapis.com/zingcam-dev/stream/67987fcc7ca05dc417b8cb3f_630632494/dash/master.mpd",
                    hls:"https://storage.googleapis.com/zingcam-dev/stream/67987fcc7ca05dc417b8cb3f_399402896/hls/master.m3u8",
                    original:"https://storage.googleapis.com/zingcam-dev/original/videos/tm9rlc1btyqeez9ndqp1wx5r.mp4"
                 }
              }
           ],
           feature_flags:{
              enable_adaptive_streaming:true,
              enable_android_streaming:true,
              enable_geo_videos:false,
              enable_ios_streaming:true,
              enable_nextar:true,
              enable_qr_button:false,
              enable_recording:false,
              enable_screen_capture:true,
              enable_video_fullscreen:true
           },
           flam_logo:"https://storage.googleapis.com/zingcam/gixib4gxg8vsjirl0bxdo27y.png",
           id:"67987fcb7ca05dc417b8cb3e",
           logo_width:1,
           name:"Fill Video Test 4",
           publish:true,
           scan:{
              compressed_image_url:"https://storage.googleapis.com/zingcam-dev/compressed/images/67987fcc7ca05dc417b8cb3f_21393135.jpg",
              image_url:"https://storage.googleapis.com/zingcam-dev/original/images/k3jwwgbzqj6bzvucq9p2h3m9.png",
              scan_text:"SCAN THIS IMAGE"
           },
           short_code:"n9tgz3",
           status:"PROCESSED",
           track_type:"CARD",
           updated_at:1738047613161
        },
        error:false
     })
})
app.get("/devCardForPrince",(req,res)=>{
    res.json({
        status: 200,
            data: {
                _id: "67987be27ca05dc417b8cb1c",
                copyright: {
                    content: "© Flamingos Technologies Inc., 2024. All Rights Reserved.",
                    show: true
                },
                created_at: 1738046434285,
                experiences: [
                    {
                        aspect_ratio: 1.7777777777777777,
                        campaign_id: "67987be27ca05dc417b8cb1c",
                        canvas: {
                            android: 0,
                            ios: 2100
                        },
                        created_at: 1738046434858,
                        id: "67987be27ca05dc417b8cb1d",
                        images: {
                            color_compressed: "https://storage.googleapis.com/zingcam-dev/compressed/images/67987be27ca05dc417b8cb1d_18827399.jpg",
                            compressed: "https://storage.googleapis.com/zingcam-dev/grey/images/67987be27ca05dc417b8cb1d_15115990.jpg",
                            feature_image: "https://storage.googleapis.com/zingcam/images/67987c75a2163d3ad42fd5a6.jpg",
                            original: "https://storage.googleapis.com/zingcam-dev/original/images/f11z3whnzk1hclapguj3ysxs.png",
                            std_compressed: "https://storage.googleapis.com/zingcam-dev/compressed/images/67987be27ca05dc417b8cb1d_309737235.png"
                        },
                        is_active: true,
                        overlay: {
                            compressed_image: "https://storage.googleapis.com/zingcam-dev/background/image/67987be27ca05dc417b8cb1d_816603320.png",
                            type: "IMAGE",
                            value: "https://storage.googleapis.com/zingcam-dev/original/images/bd6hbtdea8yrzo4cvi65qqgq.jpg"
                        },
                        playback_scale: 1,
                        rewards: {
                            enabled: false
                        },
                        status: "PROCESSED",
                        template_details: {
                            class: 0,
                            enable_background: true,
                            enable_mask: false,
                            track_type: "CARD"
                        },
                        ui_elements: {
                            banners: {
                                primary_color: "#FFFFFF",
                                secondary_color: "#007AFF",
                                variant: 0
                            }
                        },
                        updated_at: 1738046616951,
                        variant: {
                            class: 0,
                            offset: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            scale: 1,
                            scale_axis: {
                                x: 0.58,
                                y: 1.55,
                                z: 0
                            },
                            track_type: "CARD"
                        },
                        videos: {
                            compressed: "https://storage.googleapis.com/zingcam-dev/compressed/videos/67987be27ca05dc417b8cb1d_156070126.mp4",
                            compressed_playback: "https://storage.googleapis.com/zingcam-dev/compressed/videos/67987be27ca05dc417b8cb1d_156070126.mp4",
                            dash: "https://storage.googleapis.com/zingcam-dev/stream/67987be27ca05dc417b8cb1d_699993056/dash/master.mpd",
                            hls: "https://storage.googleapis.com/zingcam-dev/stream/67987be27ca05dc417b8cb1d_643939888/hls/master.m3u8",
                            original: "https://storage.googleapis.com/zingcam-dev/original/videos/drg81794buh1i1em4stpdns9.mp4"
                        }
                    }
                ],
                feature_flags: {
                    enable_adaptive_streaming: true,
                    enable_android_streaming: true,
                    enable_geo_videos: false,
                    enable_ios_streaming: true,
                    enable_nextar: true,
                    enable_qr_button: false,
                    enable_recording: false,
                    enable_screen_capture: true,
                    enable_video_fullscreen: false
                },
                flam_logo: "https://storage.googleapis.com/zingcam/gixib4gxg8vsjirl0bxdo27y.png",
                id: "67987be27ca05dc417b8cb1c",
                logo_width: 1,
                name: "Extended Video Test 3",
                publish: true,
                scan: {
                    compressed_image_url: "https://storage.googleapis.com/zingcam-dev/compressed/images/67987be27ca05dc417b8cb1d_18827399.jpg",
                    image_url: "https://storage.googleapis.com/zingcam-dev/original/images/f11z3whnzk1hclapguj3ysxs.png",
                    scan_text: "SCAN THIS IMAGE"
                },
                short_code: "ajqf9o",
                status: "PROCESSED",
                track_type: "CARD",
                updated_at: 1738046583113
            },
            error: false
    })
})

app.get("/devCardForSamarth",(req,res)=>{
    res.json({
        status: 200,
            data: {
                _id: "67987be27ca05dc417b8cb1c",
                copyright: {
                    content: "© Flamingos Technologies Inc., 2024. All Rights Reserved.",
                    show: true
                },
                created_at: 1738046434285,
                experiences: [
                    {
                        aspect_ratio: 1.7777777777777777,
                        campaign_id: "67987be27ca05dc417b8cb1c",
                        canvas: {
                            android: 0,
                            ios: 2100
                        },
                        created_at: 1738046434858,
                        id: "67987be27ca05dc417b8cb1d",
                        images: {
                            color_compressed: "https://storage.googleapis.com/zingcam-dev/compressed/images/67987be27ca05dc417b8cb1d_18827399.jpg",
                            compressed: "https://storage.googleapis.com/zingcam-dev/grey/images/67987be27ca05dc417b8cb1d_15115990.jpg",
                            feature_image: "https://storage.googleapis.com/zingcam/images/67987c75a2163d3ad42fd5a6.jpg",
                            original: "https://storage.googleapis.com/zingcam-dev/original/images/f11z3whnzk1hclapguj3ysxs.png",
                            std_compressed: "https://storage.googleapis.com/zingcam-dev/compressed/images/67987be27ca05dc417b8cb1d_309737235.png"
                        },
                        is_active: true,
                        mask:{
                            compressed_url:"https://storage.googleapis.com/zingcam-dev/mask/image/67987fcc7ca05dc417b8cb3f_820275835.png",
                            offset:{
                               x:0,
                               y:0,
                               z:0
                            },
                            scale:1,
                            url:"https://storage.googleapis.com/zingcam-dev/mask/image/67987fcc7ca05dc417b8cb3f_820275835.png"
                         },
                        overlay: {
                            compressed_image: "https://storage.googleapis.com/zingcam-dev/background/image/67987be27ca05dc417b8cb1d_816603320.png",
                            type: "IMAGE",
                            value: "https://storage.googleapis.com/zingcam-dev/original/images/bd6hbtdea8yrzo4cvi65qqgq.jpg"
                        },
                        playback_scale: 1,
                        rewards: {
                            enabled: false
                        },
                        status: "PROCESSED",
                        template_details: {
                            class: 0,
                            enable_background: true,
                            enable_mask: false,
                            track_type: "CARD"
                        },
                        ui_elements: {
                            banners: {
                                primary_color: "#FFFFFF",
                                secondary_color: "#007AFF",
                                variant: 0
                            }
                        },
                        updated_at: 1738046616951,
                        variant: {
                            class: 0,
                            offset: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            scale: 1,
                            scale_axis: {
                                x: 0.58,
                                y: 1.55,
                                z: 0
                            },
                            track_type: "CARD"
                        },
                        videos: {
                            compressed: "https://storage.googleapis.com/zingcam-dev/compressed/videos/67987be27ca05dc417b8cb1d_156070126.mp4",
                            compressed_playback: "https://storage.googleapis.com/zingcam-dev/compressed/videos/67987be27ca05dc417b8cb1d_156070126.mp4",
                            dash: "https://storage.googleapis.com/zingcam-dev/stream/67987be27ca05dc417b8cb1d_699993056/dash/master.mpd",
                            hls: "https://storage.googleapis.com/zingcam-dev/stream/67987be27ca05dc417b8cb1d_643939888/hls/master.m3u8",
                            original: "https://storage.googleapis.com/zingcam-dev/original/videos/drg81794buh1i1em4stpdns9.mp4"
                        }
                    }
                ],
                feature_flags: {
                    enable_adaptive_streaming: true,
                    enable_android_streaming: true,
                    enable_geo_videos: false,
                    enable_ios_streaming: true,
                    enable_nextar: true,
                    enable_qr_button: false,
                    enable_recording: false,
                    enable_screen_capture: true,
                    enable_video_fullscreen: false
                },
                flam_logo: "https://storage.googleapis.com/zingcam/gixib4gxg8vsjirl0bxdo27y.png",
                id: "67987be27ca05dc417b8cb1c",
                logo_width: 1,
                name: "Extended Video Test 3",
                publish: true,
                scan: {
                    compressed_image_url: "https://storage.googleapis.com/zingcam-dev/compressed/images/67987be27ca05dc417b8cb1d_18827399.jpg",
                    image_url: "https://storage.googleapis.com/zingcam-dev/original/images/f11z3whnzk1hclapguj3ysxs.png",
                    scan_text: "SCAN THIS IMAGE"
                },
                short_code: "ajqf9o",
                status: "PROCESSED",
                track_type: "CARD",
                updated_at: 1738046583113
            },
            error: false
    })
})

app.get("/devCardWithVoiceJson",(req,res)=>{
    res.json({
        status:200,
        data:{
           _id:"67978a8c47e38a4b22065788",
           copyright:{
              content:"© Flamingos Technologies Inc., 2024. All Rights Reserved.",
              show:true
           },
           created_at:1737984652129,
           experiences:[
              {
                 aspect_ratio:2.8658536585365852,
                 campaign_id:"67978a8c47e38a4b22065788",
                 canvas:{
                    android:0,
                    ios:2100
                 },
                 created_at:1738046013045,
                 id:"67987a3d47e38a4b22068c50",
                 images:{
                    color_compressed:"https://zingcam.cdn.flamapp.com/compressed/images/67987a3d47e38a4b22068c50_738686442.jpg",
                    compressed:"https://zingcam.cdn.flamapp.com/grey/images/67987a3d47e38a4b22068c50_755760352.jpg",
                    feature_image:"https://storage.googleapis.com/zingcam/images/67987a49a2163d3ad42fd59e.jpg",
                    original:"https://storage.googleapis.com/zingcam/original/images/x9kz8vz11j55x1tis1wciw6e.png",
                    std_compressed:"https://zingcam.cdn.flamapp.com/compressed/images/67987a3d47e38a4b22068c50_64867820.png"
                 },
                 is_active:true,
                 playback_scale:1,
                 rewards:{
                    enabled:false
                 },
                 status:"PROCESSED",
                 ui_elements:{
                    banners:{
                       primary_color:"#ffffff",
                       secondary_color:"#007AFF",
                       variant:0
                    }
                 },
                 updated_at:1738046273774,
                 variant:{
                    class:3,
                    is_alpha:true,
                    is_horizontal:false,
                    offset:{
                       x:0,
                       y:0,
                       z:0
                    },
                    scale:1,
                    scale_axis:{
                       x:1.9699999999999989,
                       y:1.97,
                       z:0
                    },
                    segments:{
                       back_color:"#ffffff",
                       default:"aaa",
                       flush_color:"#000000",
                       markers:[
                          {
                             allow_selection:false,
                             color:"",
                             color_map:"",
                             etime:4900,
                             id:"aaa",
                             multiplier:"",
                             next:"aab",
                             redirection_url:"",
                             stime:0,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/sxno5umjwcc7fs66hx13bj9i.png",
                             etime:6000,
                             id:"aab",
                             multiplier:"",
                             next:"aab",
                             redirection_url:"",
                             stime:5000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#10FF20",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/k8lnrr36691iei53bjvdn0me.png",
                             etime:6000,
                             id:"c2b",
                             multiplier:"",
                             next:"c2b",
                             redirection_url:"",
                             stime:5000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#00FF00",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/hj06ewy1dmvzuwztvk1tigrq.png",
                             etime:11000,
                             id:"aac",
                             multiplier:"",
                             next:"aac",
                             redirection_url:"",
                             stime:6000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#30E060",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/tp726x5z9a4ti5pzhwinix2i.png",
                             etime:11000,
                             id:"c3b",
                             multiplier:"",
                             next:"c3b",
                             redirection_url:"https://www.amazom.com",
                             stime:6000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#20F040",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/u1l121dathwwmdxi7gh865fv.png",
                             etime:16000,
                             id:"aad",
                             multiplier:"",
                             next:"aad",
                             redirection_url:"https://www.yahoo.com",
                             stime:11000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#50C080",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/c49sklzu431lcca23pj9y8xh.png",
                             etime:16000,
                             id:"c4b",
                             multiplier:"",
                             next:"c4b",
                             redirection_url:"",
                             stime:11000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#40D080",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/inw0kkyy8cqthmih2ga4wbgr.png",
                             etime:21000,
                             id:"aae",
                             multiplier:"",
                             next:"aae",
                             redirection_url:"https://www.google.com/search?q=a",
                             stime:16000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#70A0C0",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/z7j64e2h8do51ongm9ge3277.png",
                             etime:21000,
                             id:"c5b",
                             multiplier:"",
                             next:"c5b",
                             redirection_url:"https://www.google.com/search?q=b",
                             stime:16000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#60B0A0",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/f7mi0k82m21gsgvaly114y1o.png",
                             etime:26000,
                             id:"aaf",
                             multiplier:"",
                             next:"aaf",
                             redirection_url:"https://www.google.com/search?q=c",
                             stime:21000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#9080FF",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/m5u3uyn8la5251lrkngr1pvw.png",
                             etime:26000,
                             id:"c6b",
                             multiplier:"",
                             next:"c6b",
                             redirection_url:"https://www.google.com/search?q=d",
                             stime:21000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#8090E0",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/md6fl6vvb1843wxmfklg1z0u.png",
                             etime:31000,
                             id:"aag",
                             multiplier:"",
                             next:"aag",
                             redirection_url:"https://www.google.com/search?q=e",
                             stime:26000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#FF0000",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/o6liuut69j4sk2fv0b3hvls7.png",
                             etime:31000,
                             id:"c7b",
                             multiplier:"",
                             next:"c7b",
                             redirection_url:"https://www.google.com/search?q=f",
                             stime:26000,
                             web_redirect:false
                          },
                          {
                             allow_selection:true,
                             color:"#A07010",
                             color_map:"https://storage.googleapis.com/zingcam/original/images/wnn0indydfa6q07c4wgd632g.png",
                             etime:36000,
                             id:"aah",
                             multiplier:"",
                             next:"aaa",
                             redirection_url:"",
                             stime:31000,
                             web_redirect:false
                          }
                       ]
                    },
                    track_type:"CARD"
                 },
                 videos:{
                    compressed:"https://zingcam.cdn.flamapp.com/compressed/videos/67987a3d47e38a4b22068c50_165451605.mp4",
                    compressed_playback:"https://zingcam.cdn.flamapp.com/compressed/videos/67987a3d47e38a4b22068c50_165451605.mp4",
                    dash:"https://zingcam.cdn.flamapp.com/stream/67987a3d47e38a4b22068c50_531910882/dash/master.mpd",
                    hls:"https://zingcam.cdn.flamapp.com/stream/67987a3d47e38a4b22068c50_751082824/hls/master.m3u8",
                    original:"https://storage.googleapis.com/zingcam/original/videos/ysh2atu2qimfn9aqhyy935k3.mp4"
                 }
              }
           ],
           feature_flags:{
              enable_adaptive_streaming:true,
              enable_android_streaming:true,
              enable_geo_videos:false,
              enable_ios_streaming:true,
              enable_nextar:true,
              enable_qr_button:false,
              enable_recording:false,
              enable_screen_capture:true,
              enable_video_fullscreen:false
           },
           flam_logo:"https://storage.googleapis.com/zingcam/gixib4gxg8vsjirl0bxdo27y.png",
           id:"67978a8c47e38a4b22065788",
           logo_width:1,
           name:"Mask Alpha interactive",
           publish:false,
           scan:{
              compressed_image_url:"https://zingcam.cdn.flamapp.com/compressed/images/67987a3d47e38a4b22068c50_738686442.jpg",
              image_url:"https://storage.googleapis.com/zingcam/original/images/x9kz8vz11j55x1tis1wciw6e.png",
              scan_text:"SCAN THIS IMAGE"
           },
           short_code:"vmlyse",
           status:"PROCESSED",
           track_type:"CARD",
           updated_at:1738046031343
        },
        voice: {
            "hi": "aah",
            "hello": "c4d",
            "bye": "aad",
            "samsung": "xyz",
            "open": "start",
            "close": "exit",
            "yes": "affirmative",
            "no": "negative"
        },
        error:false
     })
})

app.listen(3000,'0.0.0.0',()=>{
    console.log("Server listening on PORT 3000")
    console.log("http://localhost:3000")
})