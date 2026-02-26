import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import useReveal from './useReveal';
import img1 from './../Assets/html.png';
import img2 from './../Assets/css.png';
import img3 from './../Assets/javascript.png';
import img4 from './../Assets/Nykaa.png';
import img5 from './../Assets/haan.png';
import img7 from './../Assets/react.png';
import reactImg from './../Assets/react.png';
import img8 from './../Assets/travelapp2.png';
import img9 from './../Assets/starrating.png';
import img10 from './../Assets/todoimg.png';
import img11 from './../Assets/youtubeimg.png';
import img12 from './../Assets/redux.png';
import img13 from './../Assets/bootstrap.png';
import img14 from './../Assets/cycleshop.png';
import img15 from './../Assets/quize-app.png';
import img16 from './../Assets/timer.png';
import nextImg from './../Assets/nextjs.png';
import nodeImg from './../Assets/node-js.png';
import mysqlImg from './../Assets/mysql.png';
import redisImg from './../Assets/redis.png';
import socketImg from './../Assets/socketio.png';
import tailwindImg from './../Assets/tailwind.png';
import falconImg from './../Assets/falcon.png';
import naturaviveImg from './../Assets/naturavive.png';
import vpalgoImg from './../Assets/vpalgo.png';
import healthcareImg from './../Assets/healthcare.png';
const projects = [
  {
    title: 'Falcon Furnish',
    image: falconImg,
    description: 'Multi-vendor furniture e-commerce platform with 3 Next.js apps — Customer Portal for browsing and purchasing, Vendor Dashboard for product and order management, and Admin Panel with analytics, sales tracking, and vendor metrics. Features guest cart/wishlist, RazorpayX payments, and Shiprocket multi-carrier shipping.',
    tech: ['Next.js', 'Node.js', 'MySQL', 'Redis', 'Tailwind CSS','Redux'],
    techImgs: [nextImg, nodeImg, mysqlImg, redisImg, tailwindImg, img12],
    github: null,
    live: 'https://furniture-marketplace-eight.vercel.app/',  // update with real link
  },
  {
    title: 'Naturavive World',
    image: naturaviveImg,
    description: 'MLM platform operating across Nigeria and Ghana with 2 apps — Member Dashboard for binary tree visualization, wallet management, and commission tracking, and Admin Panel for user management, bonus calculations, and multi-currency transaction handling. Features real-time notifications and automated payout system.',
    tech: ['Next.js', 'Node.js', 'MySQL', 'Socket.io', 'Tailwind CSS','Redux'],
    techImgs: [nextImg, nodeImg, mysqlImg, socketImg, tailwindImg, img12],
    github: null,
    live: 'https://naturaviveworld.com',  // update with real link
  },
  {
  title: 'Medicare',
  image: healthcareImg,
  description: 'Multi-tenant healthcare platform built with microservices architecture featuring ABDM integration, FHIR-compliant APIs, and SNOMED CT for standardized medical coding. Uses Google Cloud Healthcare API for FHIR object storage. Includes appointment scheduling, video consultations, prescription management, patient check-in/check-out with auto-checkout, and doctor verification — serving multiple healthcare providers through a unified platform.',
  tech: ['React', 'Node.js', 'MongoDB', 'Google FHIR Service', 'FHIR', 'Socket.io','Redux'],
  // techImgs: [reactImg, nodeImg, mongoImg, gcpImg, socketImg],
  github: null,
  live: 'https://techfrigate-accounts.vercel.app/',  // update with real link
},
  {
    title: 'VP Algo Trading Platform',
    image: vpalgoImg,
    description: 'High-frequency trading platform integrating multiple broker APIs for real-time market data processing, handling 10k+ daily transactions and serving 5k+ active users. Features Redis-based rate limiting blocking 2k+ malicious requests daily, WebSocket streaming for live market data with sub-second latency supporting 500+ concurrent connections, and secure JWT authentication with 2FA.',
    tech: ['React', 'Node.js', 'MySQL', 'Redis', 'Socket.io','Redux'],
    techImgs: [reactImg, nodeImg, mysqlImg, redisImg, socketImg, img12],
    github: null,
    live: 'https://vpalgotrading.com/',
  },

  {
    title: 'YouTube Clone',
    image: img11,
    description: 'Feature-rich YouTube clone with commenting, channel subscriptions, Google Auth, home feed, category filtering, and content search.',
    tech: ['React', 'Redux', 'Bootstrap', 'JS'],
    techImgs: [img7, img12, img13, img3],
    github: 'https://github.com/Dipanshu-verma/youtube-clone',
    live: 'https://my-project-of-yt.web.app',
  },

  // {
  //   title: 'Todo App',
  //   image: img10,
  //   description: 'React-based Todo App with task toggling, deletion, and pagination powered by a mock server. Clean API handling.',
  //   tech: ['React', 'JS', 'CSS'],
  //   techImgs: [img7, img3, img2],
  //   github: 'https://github.com/Dipanshu-verma/solowork/tree/main/Questions/todo',
  //   live: 'https://dashing-todo-app-ddedea.netlify.app/',
  // },
  // {
  //   title: 'Quiz App',
  //   image: img15,
  //   description: 'Real-time quiz app with scoring, answer toggles, timed exam control, and accurate result tracking.',
  //   tech: ['React', 'JS', 'CSS'],
  //   techImgs: [img7, img3, img2],
  //   github: 'https://github.com/Dipanshu-verma/solowork/tree/main/Questions/quizeapp_noapi',
  //   live: 'https://illustrious-quize-app-fa65e0.netlify.app/',
  // },
  // {
  //   title: 'Star Rating App',
  //   image: img9,
  //   description: 'Interactive star rating component — clicking a star updates the rating with dynamic comments and color feedback.',
  //   tech: ['React', 'JS', 'CSS'],
  //   techImgs: [img7, img3, img2],
  //   github: 'https://github.com/Dipanshu-verma/solowork/tree/main/Questions/Ratingstar/login',
  //   live: 'https://meek-sunburst-dc104b.netlify.app/',
  // },
  // {
  //   title: 'Travel & Tour',
  //   image: img8,
  //   description: 'Immersive travel website to explore, plan, and book destinations. Smooth animations and responsive design.',
  //   tech: ['React', 'JS', 'CSS'],
  //   techImgs: [img7, img3, img2],
  //   github: 'https://github.com/Dipanshu-verma/solowork/tree/main/treval',
  //   live: 'https://dynamic-chaja-918910.netlify.app/',
  // },
  // {
  //   title: 'Timer App',
  //   image: img16,
  //   description: 'Sophisticated timer with preset start time, adjustable intervals, and show/hide toggle for clean time management.',
  //   tech: ['React', 'JS', 'CSS'],
  //   techImgs: [img7, img3, img2],
  //   github: 'https://github.com/Dipanshu-verma/solowork/tree/main/Questions/timer',
  //   live: 'https://extraordinary-timer-d7845d.netlify.app',
  // },
  {
    title: 'Nykaa Clone',
    image: img4,
    description: 'E-commerce beauty & wellness platform with user-friendly interface, wide brand catalog, and smooth navigation.',
    tech: ['HTML', 'CSS', 'JS'],
    techImgs: [img1, img2, img3],
    github: 'https://github.com/shivamcalis1998/teamNakya',
    live: 'https://fantastic-squirrel-6303d3.netlify.app/',
  },
  // {
  //   title: 'Haan Sanitizer',
  //   image: img5,
  //   description: 'Hand sanitizer e-commerce platform with intuitive navigation, interactive cart, and efficient checkout.',
  //   tech: ['HTML', 'CSS', 'JS'],
  //   techImgs: [img1, img2, img3],
  //   github: 'https://github.com/samarjeetpatankar/Hand-Sanitizer-website',
  //   live: 'https://haan-website-clone-pt12.netlify.app/',
  // },
  // {
  //   title: 'Cycle Shop',
  //   image: img14,
  //   description: 'Online cycle shop with product selection, sorting filters, and streamlined checkout experience.',
  //   tech: ['CSS', 'JS', 'HTML'],
  //   techImgs: [img2, img3, img1],
  //   github: 'https://github.com/Rensi2411/cycle-shop',
  //   live: 'https://64dc7b507eb4113e4aa4919c--relaxed-toffee-9561a5.netlify.app/index.html',
  // },
];

const Projects = () => {
  const ref = useReveal();

  return (
    <section className="project-list" id="project" ref={ref}>

      <div className="reveal">
        <span className="s-label">Portfolio</span>
        <h2 className="s-title">Recent <span>Projects</span></h2>
        <div className="s-line" />
      </div>

      <div className="project-container">
        {projects.map((p, i) => (
          <div className="project reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>

            <img src={p.image} alt={p.title} />

            <div className="project-detail">
              <div className="proj-top">
                <h3>{p.title}</h3>
                <div className="proj-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link" aria-label={`${p.title} GitHub`}>
                    <FaGithub />
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link" aria-label={`${p.title} Live Demo`}>
                    <BiWorld />
                  </a>
                </div>
              </div>

              <p className="proj-desc">{p.description}</p>

              <div className="proj-tech">
                {p.tech.map((t, j) => (
                  <span key={j} className="proj-tech-name">{t}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      <a
        href="https://github.com/Dipanshu-verma"
        target="_blank"
        rel="noreferrer"
        className="view-all reveal"
      >
        View All Projects on GitHub →
      </a>
    </section>
  );
};

export default Projects;
