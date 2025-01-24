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


app.listen(PORT,()=>{
    console.log("Server listening on PORT 3000")
    console.log("http://localhost:3000")
})