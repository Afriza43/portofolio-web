// src/components/About.tsx

import React from "react";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
	return (
		<section
			id="about"
			className="py-20">
			<div className="container mx-auto px-4 text-center max-w-4xl">
				<SectionTitle title="About Me" />
				<p className="mt-6 text-lg text-gray-300 leading-relaxed">
					Saya adalah seorang Mahasiswa Sistem Informasi di UPN Veteran
					Yogyakarta, dengan passion untuk mengubah data menjadi wawasan yang
					dapat ditindaklanjuti. Dengan keahlian kuat dalam manajemen data,
					analisis, dan pelaporan, saya menikmati proses menyederhanakan alur
					kerja dan mendukung pengambilan keputusan yang efektif. Rasa ingin
					tahu mendorong saya untuk terus belajar dan menjelajahi teknologi baru
					untuk memecahkan masalah dunia nyata.
				</p>
			</div>
		</section>
	);
};

export default About;
