// import React from 'react';

// const questions = [
//   {
//     'question': 'Is this a quiz?',
//     'keywords': ['quiz'],
//     'response': [
//       'No. InCTF is a Capture The Flag Championship, which is a more practical hands-on computer security competition.',
//     ],
//     'answer': <>
//       No. InCTF is a Capture The Flag Championship, which is a more practical hands-on computer security competition.
//       Unlike quizzes, a participant will be working with actual tools & using problem solving skills to solve
//       challenges and obtain a flag that earns them points.
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'What is a Capture The Flag competition?',
//     'keywords': ['capture', 'flag', 'competition', 'inctf', 'ctf'],
//     'response': [
//       'CTFs (Abbreviation for Capture The Flag) are a type of computer security competition. Contestants are presented with a set of challenges which test their creativity, technical (and googling)',
//     ],
//     'answer': <>
//       <p>
//         CTFs (Abbreviation for Capture The Flag) are a type of computer security competition.
//         Contestants are presented with a set of challenges which test their creativity, technical (and googling)
//         skills, and problem-solving ability. Challenges usually cover a number of categories, and when solved,
//         each yields a string (called a flag) which is submitted to an online scoring service.
//       </p>
//       <p>
//         CTFs are a great way to learn a wide array of computer security skills in a safe, legal environment,
//         and are hosted and played by many security groups around the world for fun and practice.
//       </p>
//       <br />
//       <a target="_blank" href="https://www.youtube.com/watch?v=8ev9ZX9J45A">
//         Check out this video to learn more. 
//         {' '}
//         <span className="text-blue-500">What is a CTF?</span>
//       </a>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'Who can participate in Amrita InCTF Junior?',
//     'keywords': ['who', 'participate'],
//     'response': [
//       'Each individual who participates in the competition in order to be eligible for the finals prizes must be: ',
//     ],
//     'answer': <>
//       Each individual who participates in the competition in order to be eligible for
//       the finals / prizes must be:
//       <li>
//         not more than nineteen (19) years of age
//       </li>
//       <li>
//         a citizen of the Republic of India
//       </li>
//       <li>
//         must not have completed 12th or equivalent grade of school.
//       </li>
//     </>,
//     tags: ['eligibility', 'getting-started'],
//   },
//   {
//     'question': 'Do I need a laptop/PC to participate?',
//     'keywords': ['laptop', 'pc', 'participate'],
//     'response': [
//       'Unfortunately, yes. You will need to have a laptop or a PC in-order to participate in InCTF Junior.',
//     ],
//     'answer': <>
//       Unfortunately, yes. You will need to have a laptop or a PC in-order to participate in InCTF Junior.
//       You would need use techniques and some tools that only are available on a PC/Laptop.
//     </>,
//     tags: ['requirements'],
//   },
  // {
  //   'question': 'How can I register to InCTF Junior 2023 ?',
  //   'keywords': ['register'],
  //   'response': [
  //     'Registering is a pretty simple process. Click on the following to watch the step by step guide on how to register. ',
  //   ],
  //   'answer': <>
  //     Registering is a pretty simple process. Click on the following to watch the step by step guide on how to register.
  //     {' '}
  //     <a href="https://www.youtube.com/watch?v=twS3pzPjRzA" target="_blank">How to register ?</a>
  //   </>,
  //   tags: ['getting-started', 'help'],
  // },
  // {
  //   'question': 'how to get into the scoreboard ?',
  //   'keywords': ['scoreboard', 'leaderboard', 'scoreboards', 'leaderboards'],
  //   'response': [
  //     'We have a good tutorial on this particular subject. Click on the following link to watch the step by step guide on how to get into the scoreboard.',
  //   ],
  //   'answer': <>
  //     We have a good tutorial on this particular subject. Click on the following link to watch the step by step guide on how to get into the scoreboard.
  //     {' '}
  //     <a href="https://www.youtube.com/watch?v=767Y-wtDH5A">How to get into the scoreboard</a>
  //   </>,
  //   tags: ['getting-started', 'help'],
  // },
  // {
  //   'question': 'Are there any resources or tutorials about web security ?',
  //   'keywords': ['getting-started'],
  //   'response': [
  //     'There are few resources, mainly YouTube videos, that give an introduction to the whole security ecosystem. Click on the following link to view our collection of videos.',
  //   ],
  //   'answers': <>
  //     There are few resources, mainly YouTube videos, that give an introduction to the whole security ecosystem. Click on the following link to view our collection of videos.
  //     {' '}
  //     <a href="https://junior.inctf.in/resources">Resources</a>
  //   </>,
  //   tags: ['getting-started'],
  // },
//   {
//     'question': 'How much does it cost to participate in Amrita InCTF Junior?',
//     'keywords': ['cost', 'participate'],
//     'response': [
//       'Participation is fully free: there are no fees for participating in the contest.',
//     ],
//     'answer': <>
//       Participation is fully free: there are no fees for participating in the contest.
//     </>,
//     tags: ['getting-started', 'requirements'],
//   },
//   {
//     'question': 'Why should I participate in this?',
//     'keywords': ['why', 'participate'],
//     'response': [
//       'Developing skills in the area of cyber security opens up a whole new range of career opportunities for skilled graduates.',
//     ],
//     'answer': <>
//       <p>
//         Developing skills in the area of cyber security opens up a whole new range of career opportunities for
//         skilled graduates. Today graduates with expertise in cyber security are in great demand for the
//         positions of security analysts in top private computer firms in India.
//       </p>
//       <p>
//         Of course apart from the private computer firms, the Electronic and Computer Science Division of DRDO
//         (Defence Research and Development Organization), which is the government wing that currently handles
//         the national cyber security, is also in need of cyber security professionals with skills, agility and
//         a fresh and updated outlook at cyber security.
//       </p>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'Where does this happen?',
//     'keywords': ['venue', 'where'],
//     'response': [
//       'The Internet! The competition will be indefinitely available online at this website.',
//     ],
//     'answer': <>
//       The Internet! The competition will be indefinitely available online at this website. As long as you
//       have the ability to install software and have unfiltered Internet access, the participants can compete
//       from anywhere in India.
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'How can I prepare for this competition?',
//     'keywords': ['prepare', 'preparation'],
//     'response': [
//       'The challenges from the previous round of InCTFj are accessible. The detailed solutions to these challenges will be put up later on.',
//     ],
//     'answer': <>
//       <p>
//         The challenges from the previous round of InCTFj are accessible. The detailed solutions to these
//         challenges will be put up later on. New users can use these solutions to learn as the challenges
//         for this round might cover similar concepts as well.
//       </p>
//       <p>
//         It might also be helpful to learn a bit of programming in languages such as C, Python, Javascript and HTML.
//       </p>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'What do I need for this competition?',
//     'keywords': ['need', 'requirement'],
//     'response': [
//       'Full participation in the competition requires only -',
//     ],
//     'answer': <>
//       Full participation in the competition requires only -
//       <ul className="mx-1 list-disc">
//         <li>a computer (preferably running Linux operating system)</li>
//         <li>a modern web browser</li>
//         <li>the ability to install applications</li>
//         <li>(and of course) Internet access</li>
//       </ul>
//     </>,
//     tags: ['requirements'],
//   },
//   {
//     'question': 'What are the topics included?',
//     'keywords': ['topic', 'topics'],
//     'response': [
//       'The following topics will be used for the challenges',
//     ],
//     'answer': <>
//       Our categories are
//       <ol>
//         <li>Reverse engineering</li>
//         <li>Binary exploitation</li>
//         <li>Web exploitation</li>
//         <li>Cryptography</li>
//         <li>Forensics</li>
//         <li>Trivia</li>
//       </ol>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'What do I get if I win?',
//     'keywords': ['win', 'winning'],
//     'response': [
//       'Students finishing at top of the CTF leaderboard will be awarded with exciting goodies and prizes.',
//     ],
//     'answer': <>
//       Students finishing at top of the CTF leaderboard will be awarded with exciting goodies and prizes.
//       All other participants will also receive certificates.
//     </>,
//     tags: ['prizes'],
//   },
//   {
//     'question': 'What constitutes as cheating?',
//     'keywords': ['cheating', 'cheat'],
//     'response': [
//       'Attacking the scoring server, other teams, or machines not explicitly designated as targets is cheating.',
//     ],
//     'answer': <ul>
//       <li>
//         Attacking the scoring server, other teams, or machines not explicitly designated as targets is cheating.
//         This includes both breaking into such machines and denying others access to them.
//       </li>
//       <li>
//         Sharing solutions or providing overly-revealing hints with other teams is cheating, as is being
//         directly assisted by personnel other than contest admins (using tools from the internet is OK;
//         asking people on the internet to help you solve the problem is not).
//       </li>
//       <li>
//         We encourage you to solve problems in novel and creative ways using all available resources,
//         but we do require that you solve them yourselves.
//       </li>
//     </ul>,
//     tags: ['rules'],
//   },
//   {
//     'question': 'Are there any similar competitions?',
//     'keywords': ['similar', 'competition'],
//     'response': [
//       'There are a few CTF’s that are intended to help high school students gain some experience',
//     ],
//     'answer': <>
//       There are a few CTF’s that are intended to help high school students gain some experience such as picoCTF, HSCTF
//       etc.
//       You may try out the challenges from these CTF’s.

//       <br />
//       <br />
//       <a href="https://picoctf.org/index.html#picogym" target="_blank" className="text-blue-500">picoCTF practice</a>

//       <br />
//       <br />
//       <a
//         href="https://github.com/sajjadium/ctf-archives/tree/main/ctfs/HSCTF"
//         target="_blank"
//         className="text-blue-500"
//       >
//         HSCTF practice
//       </a>
//     </>,
//     tags: ['getting-started'],
//   },
//   {
//     'question': 'I have some doubts, where can I ask?',
//     'keywords': ['doubt', 'doubts'],
//     'response': [
//       'You can contact us directly through our [discord server](https://discord.gg/NJG6VrCCyB). Or you can always email us at [inctfj@am.amrita.edu](mailto:inctfj@am.amrita.edu).',
//     ],
//     'answer': <>
//       You can contact us through our
//       {' '}
//       <a href="https://discord.gg/NJG6VrCCyB" target="_blank" className="text-blue-500">discord server</a>
//       .
//       {' '}
//       Or you can always email us at
//       {' '}
//       <a href="mailto:inctfj@am.amrita.edu" className="text-blue-500">inctfj@am.amrita.edu</a>
//       .
//     </>,
//     tags: ['support'],
//   },
//   {
//     'question': 'Is InCTF Jr a team event?',
//     'keywords': [
//       'team event', 'participate as a team', 'individually or teams',
//     ],
//     'response': [
//       'No. InCTF Jr is an individual CTF competition exclusively for school students in India.',
//     ],
//     'answer': <>
//       No. InCTF Jr is an individual CTF competition exclusively for school students in India.
//     </>,
//     tags: ['rules', 'eligibility'],
//   },
//   {
//     'question': 'How many students from a school can qualify for the finals?',
//     'keywords': [
//       'students from a school', 'my school',
//     ],
//     'response': [
//       'There is no restriction for the number of students who can participate from a school.',
//     ],
//     'answer': <>
//       There is no restriction for the number of students who can participate from a school.
//       However, to ensure participation & diversity, only a maximum of 10 top students may be
//       qualified from a single school for the finals.
//     </>,
//     tags: ['rules', 'eligibility', 'qualifiers'],
//   },
//   {
//     'question': 'Will I get a certificate of participation?',
//     'keywords': [
//       'certificate of participation', 'participation certificate',
//     ],
//     'response': [
//       'Yes! You will get a digital participation certificate if you register and complete at-least 1 challenge for the qualifiers.',
//     ],
//     'answer': <>
//       Yes! You will get a digital participation certificate if you register and complete
//       at-least 1 challenge for the qualifiers. However, there is no participation certificate
//       for the learning round.
//     </>,
//     tags: ['certificate'],
//   },
//   {
//     'question': 'Can I participate if I an NRI student?',
//     'keywords': ['nri'],
//     'response': [
//       'Yes! InCTF Jr is open for school students who are citizens of India including Non-Residents of India.',
//     ],
//     'answer': <>
//       Yes! InCTF Jr is open for school students who are citizens of India including Non-Residents of India.
//       However, overseas citizens of India, and students of Indian origin not holding an Indian citizenship
//       are not eligible for prizes, though are encouraged to participate.
//     </>,
//     tags: ['eligibility'],
//   },
//   {
//     'question': 'Should I be a school student to participate?',
//     'questions': [
//       'Should I be a school student to participate?',
//       'Can only school students participate?',
//     ],
//     'keywords': ['school student', 'highschool'],
//     'response': [
//       'InCTF Junior is a beginner-level cyber-security programme we organize exclusively for school students in India.',
//     ],
//     'answer': <>
//       <p>
//         InCTF Junior is a beginner-level cyber-security programme we organize exclusively for school students in
//         India. If you are a college student, or a professional, we organize InCTF & InCTF Pro which are for
//         college students & professionals. You can check them out by going to 
//         {' '}
//         <a href="https://inctf.in" target="_blank">inctf.in</a>
//         .
//       </p>
//       <p>
//         If you decide to register for InCTF Junior, you shall be eligible to qualify for the finals
//         and eligible for prizes only after verification of your school ID card.
//       </p>
//     </>,
//     tags: ['eligibility'],
//   },
//   {
//     'question': 'Can I participate if I am not enrolled to any school ?',
//     'keywords': ['not enrolled'],
//     'response': [
//       'If you are a self-study student who have not enrolled in any traditional school under the age of 20,',
//     ],
//     'answer': <>
//       If you are a self-study student who have not enrolled in any traditional school under the age of 20,
//       you can contact us (
//       <a href="mailto:inctfj@am.amrita.edu">inctfj@am.amrita.edu</a>
//       ) to register
//       and participate in the championship & programme.
//     </>,
//     tags: ['eligibility'],
//   },
//   // {
//   //   'question': 'Is changing profile information possible after registration?',
//   //   'keywords': ['profile', 'information'],
//   //   'response': [
//   //     'Until the qualifier CTF starts, participants are allowed to change some of their profile information such as name, school etc.',
//   //   ],
//   //   'answer': <>
//   //     Until the qualifier CTF starts, participants are allowed to change some of their profile information
//   //     such as name, school etc. You can perform this by going to
//   //     {' '}
//   //     <a href="https://app.traboda.com/profile/edit">app.traboda.com/profile/edit</a>
//   //     .
//   //     However, some information such as your email address used to register the account cannot be changed.
//   //   </>,
//   //   tags: ['traboda', 'help'],
//   // },
//   // {
//   // 'question': 'I forgot my password, what can I do?',
//   // 'keywords': ['password', 'forgot'],
//   // 'response': [
//   //   'There is a password reset functionality available on Traboda.',
//   // ],
//   // 'answer': <>
//   //   <p>
//   //     There is a password reset functionality available on Traboda. You can go to the login page/login popup,
//   //     and click on "forgot password" option. Upon entering your registered email address, you shall be emailed
//   //     a password reset link, using which you can change your password.
//   //   </p>
//   //   <p>
//   //     If you have used a gmail (google) email address to register, you can also use the login with google
//   //     option and get access to your account without needing a password (or password reset).
//   //   </p>
//   // </>,
//   // tags: ['traboda', 'help', 'password'],
//   // },
//   {
//     'question': 'What are the different types of Certificates I can get?',
//     keywords: ['certificate', 'types'],
//     'response': [
//       'A Participant may be eligible for the following types of certificates -',
//     ],
//     'answer': <>
//       <p>A Participant may be eligible for the following types of certificates -</p>
//       <ul>
//         <li>
//           <b>Participation Certificate</b>
//           {' '}
//           - shall be issued to all eligible Participants who have
//           at least solved 1 challenge in the Contest qualifiers round. This shall be a digital
//           certificate, and shall be emailed at the end of the Contest.
//         </li>
//         <li>
//           <b>Certificate of Appreciation</b>
//           {' '}
//           -  shall be issued to all eligible Participants who have
//           at least completed solving 35% of challenges released during the Contest qualifiers round.
//           This shall be a digital certificate, and shall be emailed at the end of the Contest.
//         </li>
//         <li>
//           <b>Certificate of Excellence</b>
//           {' '}
//           - shall be issued to all eligible Participants who have
//           qualified for the national level finals of the Contest. This shall be a physical certificate,
//           and shall be mailed to the address provided by the Participant.
//         </li>
//         <li>
//           <b>Certificate of Achievement</b>
//           {' '}
//           - shall be issued to eligible Participants who are winners
//           of some prize/award at the national level finals of the Contest. This shall be a physical
//           certificate, and shall be mailed to the address provided by the Participant.
//         </li>
//       </ul>
//     </>,
//     tags: ['certificate'],
//   },
// ];

// export default questions;


import React from 'react';

const questions = [
  {
    
    'question': 'What is InCTF?',
    'keywords': ['inctf', 'what is'],
    'response': [
      'InCTF (Indian Capture The Flag) is a national-level cybersecurity contest hosted by Amrita Vishwa Vidyapeetham.',
    ],
    'answer': <>
      InCTF (Indian Capture The Flag) is a national-level cybersecurity contest hosted by Amrita Vishwa Vidyapeetham. 
      It is designed to promote awareness, learning, and hands-on experience in ethical hacking and cybersecurity.
    </>,
    tags: ['getting-started'],
  },
  {
    
    'question': 'Who can participate in InCTF?',
    'keywords': ['who', 'participate', 'eligibility'],
    'response': [
      'InCTF is open to college students, working professionals, and cybersecurity enthusiasts across India.',
    ],
    'answer': <>
      InCTF is open to college students, working professionals, and cybersecurity enthusiasts across India. 
      Both beginners and advanced participants are encouraged to join.
    </>,
    tags: ['eligibility'],
  },
  {
    
    'question': 'What do I need to participate?',
    'keywords': ['requirements', 'need'],
    'response': [
      'You need: A computer with internet access',
    ],
    'answer': <>
      You need:
      <ul>
        <li>A computer (preferably a laptop/desktop with internet access)</li>
        <li>Basic knowledge of Linux, networking, or programming (helpful but not mandatory)</li>
        <li>An inquisitive mindset and willingness to learn</li>
      </ul>
    </>,
    tags: ['requirements'],
  },
  {
    
    'question': 'How do I register for InCTF?',
    'keywords': ['register', 'registration'],
    'response': [
      'You can register through the official InCTF website.',
    ],
    'answer': <>
      You can register through the official InCTF website. Follow the instructions provided there and keep an eye 
      on your registered email for updates.
    </>,
    tags: ['getting-started'],
  },
  {
    
    'question': 'What are the phases in InCTF?',
    'keywords': ['phases', 'stages'],
    'response': [
      'Typically, InCTF consists of multiple phases:',
    ],
    'answer': <>
      Typically, InCTF consists of:
      <ul>
        <li>Training Phase – Online learning resources and practice challenges</li>
        <li>Qualifier CTF – Online preliminary round</li>
        <li>Final CTF Round – For top performers, which may be online or on-site</li>
      </ul>
    </>,
    tags: ['structure'],
  },
  {
    
    'question': 'Can I participate as a team?',
    'keywords': ['team', 'individual'],
    'response': [
      'Yes, it\'s a team participation.',
    ],
    'answer': <>
      Yes, it's a team participation, usually with teams of up to 3 members. Please check the current year's rules for confirmation.
    </>,
    tags: ['rules'],
  },
  {
    
    'question': 'What kind of topics are covered in the CTF challenges?',
    'keywords': ['topics', 'challenges'],
    'response': [
      'Challenges cover a wide range of topics, including:',
    ],
    'answer': <>
      Challenges cover a wide range of topics, including:
      <ul>
        <li>Web Security</li>
        <li>Cryptography</li>
        <li>Reverse Engineering</li>
        <li>Forensics</li>
        <li>Binary Exploitation</li>
        <li>OSINT (Open-Source Intelligence)</li>
        <li>Miscellaneous</li>
      </ul>
    </>,
    tags: ['content'],
  },
  {
    
    'question': 'Do I need to be a cybersecurity expert to join?',
    'keywords': ['expert', 'beginner'],
    'response': [
      'No. InCTF is learning-focused.',
    ],
    'answer': <>
      No. InCTF is learning-focused and welcomes both beginners and experienced participants.
    </>,
    tags: ['getting-started'],
  },
  {
    
    'question': 'Is there a registration fee?',
    'keywords': ['fee', 'cost'],
    'response': [
      'Yes. A team registration fee will be applicable.',
    ],
    'answer': <>
      Yes. A team registration fee will be applicable. Please refer to the official website for current details.
    </>,
    tags: ['requirements'],
  },
  {
    
    'question': 'What are the benefits of participating?',
    'keywords': ['benefits', 'advantages'],
    'response': [
      'Gain hands-on cybersecurity experience',
    ],
    'answer': <>
      <ul>
        <li>Gain hands-on cybersecurity experience</li>
        <li>Access free training content</li>
        <li>Improve your resume and practical skills</li>
        <li>Compete at a national level and gain recognition</li>
        <li>Win exciting prizes and certificates</li>
      </ul>
    </>,
    tags: ['benefits'],
  },
  {
    
    'question': 'Are there any learning resources available?',
    'keywords': ['resources', 'learning'],
    'response': [
      'Yes. The InCTF team provides extensive free training material.',
    ],
    'answer': <>
      Yes. The InCTF team provides extensive free training material, walkthroughs, and practice problems 
      to help participants prepare.
    </>,
    tags: ['resources'],
  },
  {
    
    'question': 'Will I get a certificate?',
    'keywords': ['certificate'],
    'response': [
      'Yes. All participants who complete certain stages will receive digital certificates.',
    ],
    'answer': <>
      Yes. All participants who complete certain stages (such as training or qualifiers) will receive digital 
      certificates. Top performers receive additional awards and recognition.
    </>,
    tags: ['certificate'],
  },
  {
    
    'question': 'How do I see my rank or score?',
    'keywords': ['rank', 'score', 'scoreboard'],
    'response': [
      'Your rank and score will be visible on the official scoreboard.',
    ],
    'answer': <>
      Your rank and score will be visible on the official scoreboard in real-time during the CTF.
    </>,
    tags: ['scoring'],
  },
  {
    
    'question': 'Where can I get updates?',
    'keywords': ['updates', 'announcements'],
    'response': [
      'All updates will be shared via registered email and on InCTF\'s official channels.',
    ],
    'answer': <>
      All updates will be shared via registered email and on InCTF's official website and social media channels 
      (LinkedIn, Twitter, Instagram).
    </>,
    tags: ['support'],
  },
  {
    
    'question': 'How long does each round of InCTF last?',
    'keywords': ['duration', 'time'],
    'response': [
      'Training Phase: Usually open for a few weeks',
    ],
    'answer': <>
      <ul>
        <li>Training Phase: Usually open for a few weeks</li>
        <li>Qualifier CTF: Runs for 24 to 48 hours</li>
        <li>Finals: May last one or more days depending on the edition</li>
      </ul>
    </>,
    tags: ['schedule'],
  },
  {
    
    'question': 'What if I face technical issues during the CTF?',
    'keywords': ['support', 'technical', 'help'],
    'response': [
      'A dedicated support team will be available during the event.',
    ],
    'answer': <>
      A dedicated support team will be available via platforms like Discord, Slack, or email during the event to assist you.
    </>,
    tags: ['support'],
  },
  {
    
    'question': 'What skill level is required to reach the finals?',
    'keywords': ['skill', 'level', 'finals'],
    'response': [
      'Participants who solve multiple mid-to-advanced-level challenges usually qualify.',
    ],
    'answer': <>
      Participants who solve multiple mid-to-advanced-level challenges in the qualifier usually qualify for the finals. 
      A good understanding of cybersecurity basics is recommended.
    </>,
    tags: ['qualifiers'],
  },
  {
    
    'question': 'Is the competition entirely online?',
    'keywords': ['online', 'offline'],
    'response': [
      'The training and qualifier rounds are fully online.',
    ],
    'answer': <>
      Yes, the training and qualifier rounds are fully online. Finals may be conducted online or on-site depending 
      on the edition and guidelines.
    </>,
    tags: ['structure'],
  },
  {
    
    'question': 'Do I need to submit write-ups for the challenges?',
    'keywords': ['write-ups', 'solutions'],
    'response': [
      'Write-ups are optional during the training and qualifier phases.',
    ],
    'answer': <>
      Write-ups are optional during the training and qualifier phases but may be required during the finals for evaluation.
    </>,
    tags: ['rules'],
  },
  {
    
    'question': 'Which communication platform is used during the event?',
    'keywords': ['communication', 'platform'],
    'response': [
      'Most editions use platforms like Discord or Slack.',
    ],
    'answer': <>
      Most editions use platforms like Discord or Slack for announcements, support, and interaction.
    </>,
    tags: ['support'],
  },
  {
    
    'question': 'Are the challenges static or dynamic?',
    'keywords': ['static', 'dynamic', 'challenges'],
    'response': [
      'InCTF includes both types of challenges.',
    ],
    'answer': <>
      InCTF includes both:
      <ul>
        <li>Static challenges with downloadable files</li>
        <li>Dynamic/live challenges hosted on servers</li>
      </ul>
    </>,
    tags: ['content'],
  },
  {
    
    'question': 'Are students from all academic branches eligible?',
    'keywords': ['branches', 'academic'],
    'response': [
      'Yes. Students from any academic background are welcome.',
    ],
    'answer': <>
      Yes. Students from any academic background (Computer Science, Electronics, Mechanical, etc.) are welcome to participate.
    </>,
    tags: ['eligibility'],
  },
  {
    
    'question': 'I\'ve never participated in a CTF before. Will I be lost?',
    'keywords': ['beginner', 'first time'],
    'response': [
      'No. InCTF is beginner-friendly.',
    ],
    'answer': <>
      No. InCTF is beginner-friendly and provides training materials, walkthroughs, and community support to help you get started.
    </>,
    tags: ['getting-started'],
  },
  {
    
    'question': 'Is hacking during the competition legal?',
    'keywords': ['legal', 'ethics'],
    'response': [
      'Yes, but only within the InCTF platform.',
    ],
    'answer': <>
      Yes, but only within the InCTF platform. External attacks or unauthorized activity are strictly prohibited 
      and result in disqualification.
    </>,
    tags: ['rules'],
  },
  {
    
    'question': 'How are the points calculated?',
    'keywords': ['points', 'scoring'],
    'response': [
      'Challenges have point values based on difficulty.',
    ],
    'answer': <>
      Challenges have point values based on difficulty. Some rounds may use partial or dynamic scoring 
      (based on the number of solves).
    </>,
    tags: ['scoring'],
  },
  {
    
    'question': 'What are the prizes?',
    'keywords': ['prizes', 'awards'],
    'response': [
      'InCTF usually offers various prizes.',
    ],
    'answer': <>
      InCTF usually offers:
      <ul>
        <li>Cash prizes</li>
        <li>Swags and goodies</li>
        <li>Internship opportunities</li>
        <li>Certificates of excellence</li>
      </ul>
      (Details are announced on the official site.)
    </>,
    tags: ['prizes'],
  },
  {
    
    'question': 'Can international students participate?',
    'keywords': ['international', 'nri'],
    'response': [
      'InCTF is primarily for Indian participants.',
    ],
    'answer': <>
      InCTF is primarily for Indian participants, though select editions may allow international students. 
      Please refer to the rules of the current edition.
    </>,
    tags: ['eligibility'],
  },
  {
    
    'question': 'What tools or platforms are commonly used?',
    'keywords': ['tools', 'platforms'],
    'response': [
      'Participants often use various cybersecurity tools.',
    ],
    'answer': <>
      Participants often use tools like:
      <ul>
        <li>Kali Linux, Burp Suite, Wireshark</li>
        <li>Python, Bash, Ghidra, GDB</li>
        <li>Online platforms such as CyberChef, HackTricks, and others</li>
      </ul>
    </>,
    tags: ['resources'],
  },
  {
    
    'question': 'Are previous challenges or write ups available?',
    'keywords': ['previous', 'challenges', 'write-ups'],
    'response': [
      'Yes. You can find them on the official InCTF website.',
    ],
    'answer': <>
      Yes. You can find them on the official InCTF website and their public code repositories.
    </>,
    tags: ['resources'],
  },
  {
    
    'question': 'Will sessions or talks be recorded?',
    'keywords': ['recorded', 'sessions'],
    'response': [
      'Yes. Training sessions and webinars are usually recorded.',
    ],
    'answer': <>
      Yes. Training sessions and webinars are usually recorded and shared post-event on event portal.
    </>,
    tags: ['resources'],
  },
  {
    
    'question': 'How do I contact the organizers?',
    'keywords': ['contact', 'organizers'],
    'response': [
      'You can reach out via the official email address.',
    ],
    'answer': <>
      You can reach out via the official email address or the contact form provided on the InCTF website.
    </>,
    tags: ['support'],
  },
];

export default questions;