// Header.tsx

const Header = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Your Name */}
      <h1 className="text-4xl font-normal mb-4 text-gray-900">Abraham Kioko</h1>

      {/* Status Line */}
      <p className="text-xl text-gray-600 mb-2">
        BSc IT (Honours) candidate · Awaiting graduation
      </p>

      {/* Institution Link */}
      <div className="mb-8">
        <a
          href="https://www.dkut.ac.ke/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-colors text-lg border-b border-gray-200 hover:border-gray-400 pb-0.5"
        >
          Dedan Kimathi University of Technology →
        </a>
      </div>

      <h3 className="text-2xl font-normal mb-3 text-gray-700">Who is he?</h3>

      {/* First Paragraph - Introduction */}
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        Abraham is a final-year IT student, having completed his coursework and
        now awaiting graduation. He carries an insatiable curiosity for how
        systems work and a relentless drive to solve complex problems. His
        journey in technology began with tinkering on simple scripts, but
        quickly evolved into a deep fascination with building robust, scalable
        solutions that live at the intersection of software engineering and
        security. He doesn't just write code, he architects systems that are
        secure, efficient, and built to last.
      </p>

      {/* Cofounder Experience*/}
      <div className="mb-8 text-lg leading-relaxed space-y-4">
        {/* Riba Tech */}
        <p className="text-gray-700">
          Alongside his studies, Abraham is the <strong>cofounder</strong> of{" "}
          <a
            href="https://riba-tech-project-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium hover:text-blue-600 transition-colors border-b border-gray-300 hover:border-blue-400"
          >
            Riba Tech
          </a>
          , a freelancing and consultation firm that helps businesses and
          individuals turn requirements into remarkable software solutions. The
          venture focuses on delivering secure, scalable digital solutions with
          a team of passionate developers.
        </p>

        {/* 2wajibike */}
        <p className="text-gray-700">
          He is also the <strong>founder</strong> of{" "}
          <a
            href="https://2wajibike.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium hover:text-blue-600 transition-colors border-b border-gray-300 hover:border-blue-400"
          >
            2wajibike
          </a>
          , a citizen accountability platform currently under development. This
          project directly applies his research on technology-enabled governance
          for Kenya's 2027 elections, creating tools for citizens to rate
          leaders, verify projects, and participate in transparent governance.
        </p>
      </div>
      {/* Specializations Section */}
      <div className="text-gray-700 mb-8 text-lg leading-relaxed">
        <p className="mb-4 text-gray-600">specializations:</p>
        <ul className="space-y-2 ml-2">
          <li className="flex items-center gap-3">
            <span className="text-gray-400 text-xl">•</span>
            <a
              href="https://medium.com/all-things-work/what-is-a-full-stack-developer-7ee41792b0cf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
            >
              full-stack engineering
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-gray-400 text-xl">•</span>
            <a
              href="https://www.geeksforgeeks.org/data-structures/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
            >
              data structures & algorithms
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-gray-400 text-xl">•</span>
            <a
              href="https://www.geeksforgeeks.org/computer-networks/what-is-a-distributed-system/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
            >
              distributed systems
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-gray-400 text-xl">•</span>
            <a
              href="https://www.geeksforgeeks.org/operating-systems/system-security/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
            >
              systems security
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-gray-400 text-xl">•</span>
            <a
              href="https://www.geeksforgeeks.org/software-testing/what-is-security-auditing-in-security-testing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
            >
              security audit + encryption
            </a>
          </li>
        </ul>
      </div>

      {/* Teach2give Experience */}
      <div className="text-gray-700 mb-10 text-lg leading-relaxed">
        <p className="mb-3">
          To bridge the gap between academic theory and industry practice, he
          recently completed an intensive three-month software engineering
          cohort at{" "}
          <a
            href="https://teach2give.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium hover:text-blue-600 transition-colors border-b border-gray-300 hover:border-blue-400"
          >
            Teach2give
          </a>
          , where he immersed himself in real-world software development
          practices.
        </p>
        <p>
          The experience transformed how he approaches engineering problems,
          working alongside experienced developers, collaborating on team
          projects, and delivering production-ready code under realistic
          deadlines.
        </p>
      </div>

      {/* Projects Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-normal text-gray-800 mb-6">
          Some of his projects
        </h2>

        <div className="space-y-6">
          {/* Project 1 - DESIC */}
          <div>
            <a
              href="https://desic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-200 hover:border-blue-400"
            >
              DESIC Automation & Management System →
            </a>
            <p className="text-gray-600 mt-1 text-base leading-relaxed">
              A management and automation platform for the DeKUT Startup and
              Incubation Center that helps manage and automate activities at the
              center, reduces paperwork, and promotes seamless information
              sharing between different users and their profiles.
            </p>
          </div>

          {/* Project 2 - SkillMatch */}
          <div>
            <p className="text-lg font-medium text-gray-600">
              SkillMatch Platform{" "}
              <span className="text-gray-400 text-sm ml-2">
                (pending deployment)
              </span>
            </p>
            <p className="text-gray-600 mt-1 text-base leading-relaxed">
              AI-powered job matching platform that goes beyond keyword
              matching—analyzing candidate profiles, skill adjacency, and
              company culture fit to suggest optimal placements. Uses
              lightweight ML models for initial matching with planned
              reinforcement learning integration.
            </p>
          </div>

          {/* Project 3 - VEC Platform */}
          <div>
            <a
              href="https://vecui.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-200 hover:border-blue-400"
            >
              VEC Platform →
            </a>
            <p className="text-gray-600 mt-1 text-base leading-relaxed">
              A comprehensive management system for Victory Evangelical Church
              (VEC), his home church. Handles member registrations, activity
              scheduling, event management, user permissions, and communication
              tools to help the church community stay connected and organized.
            </p>
          </div>

          {/* Project 4 - UI/UX Mobile App */}
          <div>
            <p className="text-lg font-medium text-gray-600">
              UI/UX Mobile Application{" "}
              <span className="text-gray-400 text-sm ml-2">
                (React Native · in progress)
              </span>
            </p>
            <p className="text-gray-600 mt-1 text-base leading-relaxed">
              Designing and building mobile applications with a strong focus on
              Human-Computer Interaction (HCI) principles and usability
              standards. Exploring intuitive interfaces, accessible design
              patterns, and user-centered workflows to create apps that are not
              just functional, but a delight to use.
            </p>
          </div>
          {/* Project 5 - 2wajibike (New - placed first for prominence) */}
          <div>
            <a
              href="https://2wajibike.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-200 hover:border-blue-400"
            >
              2wajibike - Citizen Accountability Platform →
            </a>
            <p className="text-gray-600 mt-1 text-base leading-relaxed">
              A citizen-powered platform that brings transparency to Kenyan
              leadership. Citizens can rate leaders based on real evidence,
              track projects and promises, and participate in governance.
              Aspirants get free profiles to share their vision and connect with
              voters. Currently under development, this platform applies his
              research on technology-enabled governance for Kenya's 2027
              elections.
            </p>
          </div>
        </div>

        {/* More projects on GitHub */}
        <div className="mt-8 pt-4 border-t border-gray-100">
          <p className="text-gray-600 text-base">
            More small and cool projects on his GitHub profiles:{" "}
            <a
              href="https://github.com/abraham-heuy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
            >
              primary
            </a>
            {" · "}
            <a
              href="https://github.com/abraham-workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
            >
              workspace
            </a>
          </p>
        </div>
      </div>

      {/* Research & Writing Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-normal text-gray-800 mb-6">
          research · articles · blogs
        </h2>

        <div className="space-y-5">
          {/* Quantitative Portfolio Research */}
          <div>
            <p className="text-gray-900 font-medium">
              Quantitative Portfolio Research
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Investigating algorithmic trading strategies and portfolio
              optimization techniques using historical market data. Exploring
              mean-variance optimization, factor investing, and the application
              of ML for signal generation.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              — quantitative research analysis 2026 (pending publication)
            </p>
          </div>

          {/* OOP Obsession */}
          <div>
            <p className="text-gray-900 font-medium">
              The Beauty of Object-Oriented Programming
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              A personal reflection on why OOP isn't just a programming
              paradigm. It's a way of thinking. Exploring how encapsulation,
              inheritance, and polymorphism mirror the real world, and why
              designing with classes and objects feels like orchestrating a
              symphony rather than just writing instructions. From the elegance
              of message passing to the satisfaction of a well-crafted
              inheritance hierarchy, this piece dives into the philosophy behind
              the code.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              — why OOP makes me fall in love with coding, over and over again{" "}
              <a
                href="https://github.com/abraham-heuy/myArticles-Research/blob/main/articles/treefog/myObsessionwoop.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
              >
                (github publish)
              </a>
            </p>
          </div>

          {/* Treefrog Performance Analysis */}
          <div>
            <p className="text-gray-900 font-medium">
              Treefrog Significance & Performance Analysis
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Comparative study of Treefrog vs. Node.js and Python for web
              programming, analyzing request handling, memory efficiency, and
              concurrent connection performance under varying loads. Early
              findings suggest Treefrog's C++ foundation offers compelling
              advantages for high-throughput applications.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              — treefrog performance benchmarks 2025{" "}
              <a
                href="https://github.com/abraham-heuy/myArticles-Research/blob/main/articles/treefog/treefogReseach.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
              >
                (github publish)
              </a>
            </p>
          </div>

          {/* Distributed Systems Research 1 - Communication Paradigms */}
          <div>
            <p className="text-gray-900 font-medium">
              Distributed Systems: Communication Paradigms
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Exploring synchronous vs. asynchronous communication models in
              distributed architectures. This research analyzes the trade-offs
              between message queuing systems, remote procedure calls (RPC), and
              event-driven patterns. Examining how each approach impacts system
              reliability, latency, and fault tolerance in real-world
              applications. Particular focus is given to use cases in
              microservices and cloud-native environments where communication
              choices directly affect scalability and resilience.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mt-2">
              The study also investigates hybrid approaches that combine
              multiple paradigms to achieve optimal performance, including
              real-time systems that require both low-latency communication and
              guaranteed message delivery. Case studies from large-scale
              distributed platforms inform recommendations for architecture
              decisions in different operational contexts.
            </p>
          </div>

          {/* Distributed Systems Research 2 - Concurrent Processing */}
          <div>
            <p className="text-gray-900 font-medium">
              Distributed Systems: Concurrent Processing Challenges
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Investigating concurrency control mechanisms in distributed
              environments, this research examines consensus algorithms
              including Paxos and Raft alongside optimistic vs. pessimistic
              locking strategies. The focus is on solving critical challenges
              such as race conditions, deadlocks, and maintaining state
              consistency across geographically dispersed nodes, problems that
              become increasingly complex as systems scale horizontally.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mt-2">
              Current work explores practical implementations of distributed
              transactions, conflict resolution strategies in CRDTs
              (Conflict-Free Replicated Data Types), and the trade-offs between
              strong consistency and availability in partition-tolerant systems.
              Real-world implications for database replication, distributed
              caching, and multi-region deployments are analyzed to provide
              actionable insights for system architects.
            </p>
          </div>

          {/* Leadership & Governance - Updated with 2wajibike link */}
          <div>
            <p className="text-gray-900 font-medium">
              Leadership & Governance (Kenya 2027)
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              A forward-looking policy paper examining how technology,
              data-driven governance, and youth engagement can shape Kenya's
              2027 elections and beyond. Focuses on transparent systems, digital
              public infrastructure, and accountable leadership. This research
              directly informs the development of{" "}
              <a
                href="https://2wajibike.vercel.app/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
              >
                2wajibike
              </a>
              , a citizen accountability platform currently under development.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mt-2">
              This research explores how technology integration can
              revolutionize campaigning with fewer resources, enabling
              candidates to reach voters through digital platforms, analyze
              sentiment data to understand community needs, and mobilize
              supporters efficiently without the massive budgets traditionally
              required. Beyond elections, the paper proposes frameworks for
              technology-enabled evaluation of leaders' performance while in
              office: tracking campaign promises against actual deliverables,
              providing citizens with accessible dashboards on infrastructure
              projects, budget allocation, and legislative voting records. By
              creating transparent feedback loops between constituents and their
              representatives, technology can transform governance from a
              periodic judgment at the ballot box into a continuous dialogue,
              empowering citizens with data to hold leaders accountable and
              helping leaders make better-informed decisions based on real-time
              community feedback rather than outdated assumptions.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              — research informing{" "}
              <a
                href="https://2wajibike.vercel.app/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-400 underline-offset-2"
              >
                (2wajibike /about)
              </a>
            </p>
          </div>

          {/* End-to-End Encryption */}
          <div>
            <p className="text-gray-900 font-medium">
              End-to-End Encryption: Challenges & Improvements
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Technical exploration of current E2EE implementations, their
              vulnerabilities, and proposed enhancements. Covers key exchange
              mechanisms, post-quantum considerations, and usability-security
              tradeoffs in consumer applications.
            </p>
          </div>
        </div>
      </div>

      {/* Research Note */}
      <div className="mb-10 text-gray-500 text-sm italic border-l-2 border-gray-200 pl-4">
        — Actively researching and writing at the intersection of technology,
        finance, security, and governance. These explorations inform his
        technical work and his perspective on building systems that matter. Once
        an article is published, the link will be added here.
      </div>

      {/* Skills & Interests Section - unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Skills Column */}
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            skills & abilities
          </h3>

          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            skills
          </p>
          <ul className="space-y-2 mb-6">
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">Languages:</span> TypeScript,
                Python, C/C++, Java, SQL
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">Frontend:</span> React, Next.js,
                Tailwind, React Native
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">Backend:</span> Node.js, Express,
                Django, Treefrog
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">Databases:</span> PostgreSQL,
                MongoDB, MySQL
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">DevOps & Cloud:</span> Docker,
                AWS, CI/CD, Linux, Render, Vercel
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">Security:</span> Cryptography,
                Secure Coding, Auditing
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">Tools:</span> Git, Postman, Figma,
                Canva, Lucid Charts
              </span>
            </li>
          </ul>

          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            abilities
          </p>
          <ul className="space-y-2">
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>Problem Solving</span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>Communication</span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>Team Player</span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>Scrum Master (Continuous learning)</span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>Critical Thinking</span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>Adaptability</span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>Time Management</span>
            </li>
          </ul>
        </div>

        {/* Interests Column */}
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4">interests</h3>
          <ul className="space-y-2">
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">football:</span> player and avid
                fan.
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">motorsport:</span> F1, NASCAR
                (hell yeah!), WRC
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">hiking:</span> trading keyboards
                for trails, chasing sunsets
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">writing & art:</span> sketching
                ideas and putting thoughts on paper
              </span>
            </li>
            <li className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <span className="font-medium">gaming:</span> alot of gaming
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 pt-8 mt-4"></div>

      {/* Vision Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-normal text-gray-800 mb-6">vision</h2>
        <div className="text-gray-700 text-lg leading-relaxed space-y-4">
          <p>
            I believe that technology, when built with intention and heart, is
            the closest thing we have to magic. Every line of code is an
            incantation. Every system architecture is a spell waiting to be
            cast. And like any superhero worth their cape, I've chosen to wield
            these powers for good.
          </p>
          <p>
            My vision is simple but unwavering: to build tools that lift people
            up. Whether it's helping farmers in Kenya access fair markets, or
            connecting talented people with opportunities they deserve, or
            securing communications for those who need it most. I'm not just
            building software. I'm building bridges, ladders, and safety nets.
          </p>
          <p>
            I may not wear a cape (though I've thought about it), but every
            project I touch, every problem I solve, every line of secure code I
            write, it's all in service of one goal: leaving this world better
            than I found it, one system at a time. The problems are big, but so
            is the dream. And I've got a lot to do until my purpose is done.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="border-t border-gray-100 pt-10 mt-4">
        <h2 className="text-2xl font-normal text-gray-800 mb-6">contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-gray-600">
          <a
            href="mailto:abrahamkisuaofficial2@example.com"
            className="hover:text-blue-600 transition-colors text-center md:text-left"
          >
            email
          </a>
          <a
            href="https://github.com/abraham-heuy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors text-center md:text-left"
          >
            github
          </a>
          <a
            href="tel:+254115042624"
            className="hover:text-blue-600 transition-colors text-center md:text-left"
          >
            phone
          </a>
        </div>

        <div className="text-center py-6 border-t border-gray-100 space-y-4">
          <p className="text-gray-500 italic text-lg">
            "The only way to do great work is to love what you do."
          </p>
          <p className="text-gray-400 text-sm">— Abraham Kioko</p>
          <p className="text-gray-500 italic text-lg pt-4">
            "I don't wish for my success, I speak it."
          </p>
          <p className="text-gray-400 text-sm">— Jack Harlow</p>
          <p className="text-gray-400 text-xs mt-6">
            © {new Date().getFullYear()} · Built with curiosity and purpose
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Header;
