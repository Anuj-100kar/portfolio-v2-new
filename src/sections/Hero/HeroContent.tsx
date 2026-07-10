import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import HeroImage from "./HeroImage";
import { TypeAnimation } from "react-type-animation";

export default function HeroContent() {
    return (
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">
            <div className="min-h-[80vh] flex flex-col justify-center">

                <p className="text-blue-500 font-semibold text-lg">
                    👋 Hello, I'm
                </p>

                <h1 className="text-4xl md:text-7xl font-extrabold mt-4">
                    Anuj Shambharkar
                </h1>

                <h2 className="text-3xl text-zinc-300 mt-6 font-semibold">
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            1500,
                            "React Developer",
                            1500,
                            "Backend Developer",
                            1500,
                            "AI Enthusiast",
                            1500
                        ]}
                        wrapper="h2"
                        speed={40}
                        repeat={Infinity}
                        className="text-3xl text-zinc-300 font-semibold mt-6"
                    />
                </h2>

                <p className="text-zinc-400 max-w-2xl mt-8 leading-8 text-lg">
                    I build scalable web applications,
                    modern user experiences, and AI-powered
                    products using React, Node.js,
                    TypeScript, Java, and MongoDB.
                </p>

                <HeroButtons />

                <HeroSocial />

            </div>
            <div>
                <HeroImage />
            </div>
        </div>
    );
}