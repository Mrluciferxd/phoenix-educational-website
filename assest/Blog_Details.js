var blogJSON = {

    "blog_details": {

        "blogs": [

            {

                "title": "Thinks you should know before getting started with your coding career",

                "describe": "This beginner-level, six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills -- including Python, Git, and IT automation -- that can help you advance your career. Knowing how to write code to solve problems and automate solutions is a crucial skill for anybody in IT.",

                "quote": "“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” -  Antoine de Saint-Exupery",

                "sub_describe": "This program builds on your IT foundations to help you take your career to the next level. Its designed to teach you how to program with Python and how to use Python to automate common system administration tasks. You'll also learn to use Git and GitHub, troubleshoot and debug complex problems, and apply automation at scale by using configuration management and the Cloud. This certificate can be completed in about 6 months and is designed to prepare you for a variety of roles in IT, like more advanced IT Support Specialist or Junior Systems Administrator positions. We recommend that you have Python installed on your machine. For some courses, you’ll need a computer where you can install Git or ask your administrator to install it for you.",

                "author": "Abhishek Mishra"
            },

            {

                "title": "Give Wings To Your Dreams With Our Business Course",

                "describe": "Since your education should help you contribute and compete in the global business environment, we will also focus on multicultural aspects of markets and business. We will examine how the business models other countries adopt often reflect their most salient characteristics.",

                "quote": "“Success is not final; failure is not fatal: it is the courage to continue that counts.” – Winston Churchill",

                "sub_describe": "Have you ever wondered what the billionaire Warren Buffett, visionary Steve Jobs, and entrepreneur Jeff Bezos have in common? After you finish studying business practices in this course, you may discover you have many of these same qualities. This course will expose you to business terminology, concepts, and current business practices. We will help you establish a viable business vocabulary, foster critical and analytical thinking, and refine your business decision-making skills. You will acquire these skills throughout this course by simulating today's workplace. By the end of the course, you will discover how to chart your choice of career in business. ",

                "author": "Abhishek Mishra"
            },

            {

                "title": "The Complete Accounting & Bank Financial Course 2022",

                "describe": "Digital Marketing Certification Course transforms you into a digital market specialist in domains like SEO, social media, pay-per-click, conversion optimization, digital analytics, content, mobile, & email marketing. Get 12-month access to Digital Marketing Program & become industry-ready with the latest tools, work on real-world projects, and attend Expert Sessions from the Facebook team.",

                "quote": " “Innovation needs to be part of your culture. Consumers are transforming faster than we are, and if we don’t catch up, we’re in trouble.” – Ian Schafer",

                "sub_describe": "This online digital marketing certification course gives you an in-depth understanding and advanced knowledge of the eight most important digital marketing domains and includes real-world projects for gaining domain experience to help you become industry-ready. You’ll be exposed to 30 digital marketing tools extensive project experience and a digital marketing capstone project to make you job-ready. After you have completed this digital marketing training course, you will receive a digital marketing certificate from Simplilearn stating that you have acquired the skill set of a Digital Marketing Specialist, validating your ability to lead digital marketing efforts in your organization.",

                "author": "Abhishek Mishra"

            },

            {

                "title": "One more Step towards Coding Life (PHP)",

                "describe": "This hands on PHP Programming course provides the knowledge necessary to design and develop dynamic, database-driven Web pages using PHP 7. PHP is a language written for the Web, quick to learn, easy to deploy and provides substantial functionality required for e-commerce. This PHP training course introduces the PHP framework and syntax and covers in depth the most important techniques used to build dynamic Web sites. Students learn how to connect to any modern database, and perform hands on practice with a MySQL database to create database-driven HTML forms and reports.",

                "quote": "“When to use iterative development? You should use iterative development only on projects that you want to succeed.” – Martin Fowler",

                "sub_describe": "Pheonix provides PHP training based on a PHP training syllabus. We are 100% practical based PHP training providers in Kochi, Ernakulam. Our training program is purely based on the major requirements arising in main IT companies like TCS, Infosys, Wipro, Cognizant etc. Most of the technology & IT outsourcing companies require fresh graduates who trained in PHP. Softloom has included both, PHP training syllabus for beginners as well as advanced PHP course, that is mainly required by multinational companies focusing on software development.",

                "author": "Abhishek Mishra"

            },

            {

                "title": "Machine Learning & Data Science With Python",

                "describe": "Welcome to Machine Learning & Data Science with Python basic course. The course requires basic knowledge of Python along with its core concepts. In addition an intermediate knowledge of English or at least understanding of technical vocabulary is mandatory. The main purpose of this lookout course is to encourage students to apply basic knowledge of statistics, mathematics and Python to start solving real world problems using open source Machine Learning tools. The course is divided in two different parts.",

                "quote": "“PYTHON = (P)rogrammers (Y)earning (T)o (H)omestead (O)ur (N)oosphere.” - Sean McGrath",

                "sub_describe": "In this course we will use Python 3.7 and Jupyter Notebook as main tools for conducting exercises. All the work will be conducted on Google Colaboratory, as it’s free to use powerful tool based on Jupyter Notebook, thus you will need a google account to work on this platform. If you’re not familiar with Jupyter Notebook, fill free to checkout this tutorial. The course is VNTU students’ oriented, but everyone can access the notebooks in Colaboratory and work through the course, if you want to do exercises on your local machine you can find the related information in FAQ.",

                "author": "Abhishek Mishra"

            },

            {

                "title": "Start Today UI/UX Design Specialization",

                "describe": "The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective, rather than on one focused on marketing or programming alone. In this sequence of four courses, you will summarize and demonstrate all stages of the UI/UX development process, from user research to defining a project’s strategy, scope, and information architecture, to developing sitemaps and wireframes. You’ll learn current best practices and conventions in UX design and apply them to create effective and compelling screen-based experiences for websites or apps.",

                "quote": "“UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.” — Dain Miller",

                "sub_describe": "User interface and user experience design is a high-demand field, but the skills and knowledge you will learn in this Specialization are applicable to a wide variety of careers, from marketing to web design to human-computer interaction.\nLearners enrolled in the UI/UX Design Specialization are eligible for an extended free trial (1 month) of a full product suite of UX tools from Optimal Workshop. Details are available in Course 3 of the Specialization, Web Design: Strategy and Information Architecture.",

                "author": "Abhishek Mishra"

            }

        ]

    }

}

document.getElementById('blog_title1').innerHTML = blogJSON.blog_details.blogs[0].title;
document.getElementById('blog_quote1').innerHTML = blogJSON.blog_details.blogs[0].quote;
document.getElementById('describe1').innerHTML = blogJSON.blog_details.blogs[0].describe;
document.getElementById('sub_describe1').innerHTML = blogJSON.blog_details.blogs[0].sub_describe;
document.getElementById('author1').innerHTML = blogJSON.blog_details.blogs[0].author;