import GreenTheMap from "../images/greenTheMap.PNG";
import SraCollegeLogo from "../images/SraCollege.jpeg"
import DockerLogo from "../images/docker.png"
import mongodbLogo from "../images/mongodb.png";
import mongooseLogo from "../images/mongoose.png";
import nodejsLogo from "../images/nodejs.png"

  export const Bio = {
    name: "Shridhar Mugalkhod",
    roles: [
      "Full Stack Developer",
    ],
    description:
      "Experienced Software Engineer with a demonstrated history of working in the product industry. I am passionate about exploring web application development in my professional career.",
    github: "https://github.com/shridhar-mugalkhod",
    resume:
      "https://drive.google.com/file/d/19VtRWr-NjOOytfF73jc0PgSkXbmsqcQH/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/shridhar-mugalkhod/",
  };

  export const skills = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Java",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/640px-Java_programming_language_logo.svg.png",
        },
      ],
    },
    {
      title: "Libraries / Frameworks",
      skills: [
        {
          name: "Node Js",
          image: nodejsLogo,
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,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",
        },
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Mongoose",
          image: mongooseLogo
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          image: mongodbLogo
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name:"Swagger",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png?20170812110931"
        },
        {
          name: "Jira",
          image:"https://www.ecobit.nl/portal-content-website/koppelingen/jira%20software.png"
        },
        {
          name: "Confluence",
          image: "https://cdn.iconscout.com/icon/free/png-256/free-confluence-3628704-3029929.png?f=webp"
        },
        {
          name: "Jenkins",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png"
        },
        {
          name: "Docker",
          image: DockerLogo
        },
        {
          name: "Netlify",
          image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
        },
      ],
    },
  ];
  
  export const experiences = [
    {
      id: 0,
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxAOEBEWEBASFxAPEBUQFxYQGBUQFhYYFhcVFhYYHSkgGxslJxUXIzEtMSkrLi4uFyEzRDM4NygtLjcBCgoKDg0OGRAQGi0eICUtMi4uLS0uLTctLSs3OC0rNzc4Ky8tLi8wLS4tLTUtLS0rLS0rLS4tLS01LS03LzAuN//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAwQIAQL/xAA7EAABAwIEBAMHAgQFBQAAAAABAAIDBBEFBhIhBxMxQRRRYSIjMnGBkaFCghVjwfBDUpKx0SQzU2Jy/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EACYRAQEAAgICAgIABwAAAAAAAAABAhEDBCFBEjEyUQUTFCRhobH/2gAMAwEAAhEDEQA/ANxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREEDmfHPCNa1gDpH3tfoAO5sq3R5wqGvBktIzuLBpA9CFJZ5wx79E7AXBoLXgbkC9wbeXVU2OJzrhrS6wJOkX2814fc5+fHm1Lqen0HR6/Xz4N5SW+2rTYhGyndVOdaJrDM538sN1E/ZYZjHF/EJJS6n0U8IPsNLGyOLe2su7/Ky2CXDm1WFvpGPBEsDoWv7aiwtuR5X7LzPi2Fz0kroKiN0UjTYhw6jpdp7j1C9/r6yx3XzPatxy1Pp6A4aZ4/isUjJWhlTDpLwy+l7HdHtBNx03Hy81dlk/A/LU8HPrpmGMStbFC1w0lzb6nPse2wt57rWVzOTfhLjtuPkREUVgiIgIiICIiAiIgIiICIiAiIgIi6GOVL4aWpmjF3xxTSMHW7msLgLfMIOli2bcPpH8qoqo45O7SdRHzDb2+qk6GtinjbLDI2WN3wujIcD9QvJE8zpHuke4ue4lznONyXHcknzWn8BK+UVdRTAkwuiMxHYSNe1oI+YcfsPJW5ceptnw595a02itrIoGOlme2ONu7nPIaB8yVFYTmvDquQxU9THJIf0g6S75B1tX0WX8fK+XxNNS3IhEfPA6B0jnuaSfOwaP9R81lkUrmOa9hLXNIc1zTYgjcEEd0x4pZsz57jlqPUNVTvonmeEaoHG80Q/T/wC7P6j+x2pMco7NLpWG9nN7kf8AC4qKvkfhkVS4e+dTsmcLf4hiDjt8ys2JvuvI7XYvWusff+nudPrTtzed+vf7a9TzskaHscHNPQtNwvxXVsUEbpZpGxRt+J0hDQPqVTsgzv5skX6C3X6BwIH9fwqRx7r5TV09MSRC2ITAdjI57mkn5Bo+581t6nJ/PwmX0wd3i/ps7j9tVwnNuH1b+VT1UcknZoOkn5B1r/RTi8fwTOjc2Rji17SHNc02IcNwQvWOB1L5qWmmkFpJIoZHjpZ7mAkW+ZWnPD4snFyfN30RFWuEREBERAREQEREBERAREQF8cL7FFxVdQ2KN8rzZjGukefJrRcn8IMux3gzFLM6SlqPDscbmN7OYG366TqG3ofurhknJlPhMTmxkySyW5srhYut0AA+Fu/RY/jvFXEp5nOp5fCwg+7YxrHG3Yvc4Ek/haFwqz3JiQkpqm3iImiQPaNIkjvpJLegcCR029oK3KZ68s+GXH8vET+dcnU+LRNZKTHJHcxStFy2/UEHq02G23RU3BOC8UczZKqp58bTflsZyw+3+Y6jt6D7qV4qZ6kwxsdPTAeJlBfqcNQjivYGx2JJBtfb2Ss5wTiriUEzXzy+JiJ94x7WNNu+lzQLH8eiYzLXgzy4/l5j0LoFtNtrWt2t5KqVuS2ueXRS6GnfSW6rfI36KxfxOLw3jNXuOV4nV/K0a7/ZYJjfFXEp5nPgl8NFc8tjGscQOxc5wNz+PRZ8+tjz+Mp9NWHcy6/nC6216HC34d76K80ZAE7bAOsP1M+V+i/GbMq0uN08ZLyx7bmGVguQD1aQerdum3RRPCzPUmJtkp6kDxMQD9TRpEkd9JJA2BBt029oLu4/VuoJiKZ2nmjW9hF2tN7B7QehNj9lTn/aTc/H/i/Dfdur+V9/tXsC4MxRTNlqqjnsadQjYzlh1umo6jt6D7rVWi2wWd0Oa6ljwZHc1n6mkAbehC0KGQPa143DgHD5FS4e3j2N69Oc/Ry6tkvtyIiK9nEREBERAREQEREBERAREQfF1sTo21EE1O42bKySFxHk9paf912kQeVcdytWUUzoZoX7EhrmtLmPHYtcOqvnBrD/AAle81YfTzTQ2pWTNMfNYXAvIJ/UNDdutiVtqicx4BDXw8mW7XNOuKRmz4pB0ew9irLybmlE4fjdxn3GrKVRUuir6dhlMbOTKxg1ODA4ua5oHX43X+iyzBMsVlbM2CGB9ybOc5pa1g7l7j0W64Vms0bn0WLvbDPE0ujnPsx1MI/W3+Z5tXPS8ScIk1gVbRpDne22SO4b/lLmi59OpXZlZNaRywxyu7dO9idJT0uEvpZ5eXTspvCukPXRy+Xe3d3p5lebKrBKqLQX08rQ8B0ZLHAPa7oRst6w2hlxiZlfWMMdDGddDSv6vPaonH+w/s2SrzBSwu5b5BqGxDQ59j62CrvNjxflVs4Mub8Yz3gtlKopnS19QwxGRnJhY8aXFhcHOc4HoPZbb6+ins50/NqAYQZHsZaUMF9Ivtf13KnKvFzMRBRkOe4XdJ1bGzzPm70UhhmHsp2aG7k+09x3LndyT3Kyc+uzLjPr9t3W31LM/f6ZrQYXNO8MYw77EkEBvqSVqNJCI42RjoxrWj6Cy5rIudXqY8G9Xe0u53cuxZuakfURFrYxERAREQEREBERAREQEREBERAREQYpx+qJOfRxHaIMkkb6yF1nfYBv+pZOvU2a8r02KQCGoBGkl0b2WD2O6XB8vMdFTcH4N0kMwknnfUsadQjLRG026B9iSR9ldhnJNMvJxZXLcWzC6yZ2EQzuvzzTMkce5dywdVvPus+JWw6Ba1tulu1lWazJkT3l0bzG07lttQHy8l4/8Q63JzWXD097+Gdvj4JZn79uhw/kdzJm/o0tcfR19v6/ZXdR+EYVHSs0Rjru5x6k+qkFq6vFlxcUxy+2Tuc2PNzXPH6fURFoZhERAREQEREBERAREQEREFF4iZvqKKSloqONr6qqIDDJ8LQXBjdrgXJPfYWUdmbM+LYW6jlmjZUU744o6kMG/idy/SW9NhttbYrvcRMGoMRlgpJKoU1eN6ew1Etd2c3uLt23G4VTxM4/gDWzvqm1dKHNYQ9xl69AdY1N6dirMZLFGVst/S35/wAyVtN4B1CzmMnLjL7syWZ7vT0+H4iubiViuIUNO2roix0bDaoa9mshp6PG/TsfmD5qs8T8xTOiwaopppadtSHSuEb3R3DhCQ12ki9tR/KvuKY/SMqY8MmJMtS32WFpc1zHamkOPT9LlzWteHd735QVfxEgbg4xJljLIOVHETe1Tbdp9G9e1xbzXS4U5wrMTkqmVWj3TYi3Q3QbuLgb/ZQWH8LHNxYsfd2GxnxLLm4dqNhD8/Z9rza0eYUhwuIGK495CZ/2E0qlZjq6Rly+U2l8BzXUx4rPhOIFmo+3RyNbyxIzcgHe1yPy1wXLXZnqWZhpsMBb4aSMyPu32tQjld8V/NgUJnIwY1RfxPDXONRQP1NcGljiGgPc0X6kbOHyPmoHLuYBiWYsNqrWeYXxyjsJWwz6rehuD9UmPsudlk37W3OeeKlla3CsMiE1Wbcxztwy41WAuBcDck7BcOZsyYxhZgqZYY56Tl07KnTYFtQW+8sW/CCehIIUVklwZmjE2y7SP8TytXUgyMeAP2i/yCu3EyRjcIrTJaxj0tv3eXAN/NlzWrI75st2r2fs61UFHR4jh7mGnnu1/MZqIcRqaOux9l4Pq1djAMaxaOGWvxDkGjbTPqIzDYFz7Ncz6EX/AAozLGBurcqmnIu5wnkgHfUyVzm28rkEfuVRmzW6XL0GGNN6gzCm09zA0iRv5cxv7SuzHfhG5WXdvpa6LOuJHA6nFJDHrEscdP7Fho1ta9xF993EftV/yjiElVQUtTLbmSxte/SLC58gqhn3CRR5ZNK3/BbStcR3fzWanfUkn6qx8OXA4TQ2/wDE0fbYqN1pPG2Zav6QfDnN9RXHETVFuilLNGhumzTzdV/P4AuplbNGK4sauogZFDSsZPFTtNi7xOgGLUT1tqbfoN1GcGJo2fxmWQgRB0Tnud0DBzy4n0suKnyJI4vrMAxLTE5zhp1PYARvo1NvqAv3ClZN1GXLUq18O821Na+opK2LlVVOSHFoLWuAdpcLdNQI7bG6vCzfh1mutkrJ8JxEB1RC0va8BoJ0loLXadjs4EHbotIUMp5W4XcfURFFMREQEREBERBTc+ZHbiZinjmNNVw/9uQC4LQdQBtuLHcEdLlRmO5DrcQNLHVV3/TxRxCZrAXGSobcOkF7AEg9Te3ktFRdmVQuEqj52yKa5tBHBI2COju1rXAuuz3YaBbyEa7ON5RfUYvR4mJWtZTtDHMIJLrOebg/vVuRPlT4QKp+VcoSUVXiVS6Vr21j3PaACCy75H2Pn8YVwX1N6SslVLh1lN+FU0sEkjZTJIZQWAtAGlrbb/8Az+VEYTw18JjDcShla2nDpXth0m7eZG5paD0sC/b02Whr6nyqPwx8f4UbOuQG18zK2mmNJWst7xt7O0izSbG4cOlx2XTxvINViElOKyuJpoo4GyRx3JfO1tpH72ALjfex6rREXflS4R16GkjgiZDE0Mjja1jGjoGgWAWeUHCwRYsK/mtNO2V1QyINIIcbuaL9LBxB+i0tFyWx24S6dDHMKjraeWlmuY5W6TbqO4I9QQD9FRsMyJiNJR1dFDiHsyGLw7vbYYmhzjKABfTqBHQ9itIRJbC4y+VXyZkyHDaSSlLueZrmoc4aQ+406Q2+zbX79yoTBMg1WHSVQo60inminETH3Bjnc20bza4Onz26dFoaJ8q58J4UvIuRv4dJNVzzmprJgQ95vYAnUQLm5JIFyfJXRfUS3aUkn0IiLjoiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/9k=",
      role: "Full Stack Developer",
      company: "Simnovus",
      date: "January 2021 - June 2023",
      desc: "* Worked on Simnovator, a real-time web application where users can test and view statistics and logs of 5G networks.\n" +
            "* Created REST APIs for handling GET, POST, PATCH, and DELETE methods with reusable, testable, and efficient code using the Node and Express frameworks. MongoDB was used as the database.\n" + 
            "* Followed the REST architectural style to standardize existing APIs and transform them into RESTful web services.\n" + 
            "* Implemented multiple WebSocket connections to external servers for obtaining real-time data on the backend side.\n" +
            "* Optimized statistics graphs and charts for long-term 5G network tests on the frontend side. Additionally, implemented a statistics graph feature to display past data and provided timely bug fixes to ensure the smooth functioning of the Simnovator application.\n" +
            "* Worked closely with a product manager and software architect on tasks such as database design, product roadmap planning, effort estimation, and determination of developer requirements and specifications.",
      skills: [
        "ReactJS",
        "NodeJs",
        "Material UI",
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Swagger",
      ],
      // doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
    },
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/C510BAQGZSaCEhyBejA/company-logo_200_200/0/1519893234831?e=1701302400&v=beta&t=TwObI6rsK-Hn7RYLTIu25ErwjxcsJpUZWIZAo6cbjqM",
      role: "Machine Learning Intern",
      company: "Datalore Labs Private Limited",
      date: "July 2019 - August 2019",
      desc: "Speed Detection: Detecting the speed of the identified vehicles (km/hr) in a video sequence and capturing the photo of the vehicles going at abnormal speed and store it in a file.",
      skills: [
        "Machine Learing",
        "Python",
        "NumPy",
      ],
      // doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: "data:image/jpeg;base64,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",
      school: "SJB INSTITUTE OF TECHNOLOGY | Bengaluru, Karnataka, India.",
      date: "August 2016 - August 2020",
      grade: "6.9 CGPA",
      desc: "At SJBIT College, I immersed myself in diverse coursework, covering algorithms, data structures, and software engineering. Notable was a web app project for real-time collaboration, honing both coding and teamwork skills. Ready to apply my solid technical grounding to real-world challenges.",
      degree: "Bachelor of Engineering - Computer Science and Engineering",
    },
    {
      id: 1,
      img: SraCollegeLogo,
      school: "S R A COMPOSITE PU COLLEGE | Bagalkot, Karnataka, India.",
      date: "2014 - 2016",
      grade: "80.00%",
      desc: "During my PUC, I focused on Science subjects like Physics, Chemistry, and Mathematics. This laid the foundation for my later studies. I also took part in science-related events and projects, which sparked my interest in scientific exploration and critical thinking.",
      degree: "PUC - Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Green the Map",
      date: "Jul 2019 - Aug 2020",
      description:"An effective garbage management system.",
      details:
        "* Developed ”Green the Map” web application showcasing interactive visualizations of garbage areas, user complaints, and smart bin maintenance data.\n" + 
        "* Implemented real-time updates using WebSocket communication to ensure seamless synchronization of smart bin data across devices.\n" + 
        "* Utilized data visualization libraries to present user complaints and garbage distribution patterns, aiding in informed waste management decisions.",
      image: GreenTheMap ,
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Machine learning",
        "IoT",
        "Image processing",
        "Thinkspeak",
      ],
      github: "https://github.com/shridhar-mugalkhod/green-the-map",
      // webapp: "add website link.",
      member: [
        {
          name: "Rohan Sridhar",
          img: "https://media.licdn.com/dms/image/C4E03AQGrrsFoODXcHA/profile-displayphoto-shrink_800_800/0/1650107966499?e=1698883200&v=beta&t=dktL4Y0SsPQsYoaf5DDYzSrurukjnDqWkQkb9sK0QPI",
          linkedin: "https://www.linkedin.com/in/bsrohan49/",
        },
        {
          name: "Spoorthy Madhusudhan",
          img: "https://media.licdn.com/dms/image/C5603AQHtU1Ju1Vk4Qg/profile-displayphoto-shrink_200_200/0/1651689114016?e=1698883200&v=beta&t=W2ULdY2m5OGmnfs4yK_gwCHvW2O2XmXqc7xLuhm_XKM",
          linkedin: "https://www.linkedin.com/in/spoorthy-madhusudhan-372501125/",
        },
        {
          name: "Tejaas Reddy",
          img: "https://media.licdn.com/dms/image/D5635AQF9MI_y4joTwg/profile-framedphoto-shrink_200_200/0/1662761267726?e=1694016000&v=beta&t=YGvpYvjxgKgxr6V8w5z1ksmbr3atbzSZlMneiHRDORc",
          linkedin: "https://www.linkedin.com/in/tejaas-reddy/"
        },
      ],
    },
  ];
  