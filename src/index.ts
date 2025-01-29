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
                    compressed_image:"https://storage.googleapis.com/zingcam-dev/background/image/67987fcc7ca05dc417b8cb3f_772521876.png",
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


app.listen(3000,'0.0.0.0',()=>{
    console.log("Server listening on PORT 3000")
    console.log("http://localhost:3000")
})