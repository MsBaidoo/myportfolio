
import headshot from "../../../assets/images/headshot.jpeg"

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-center text-3xl font-semibold mb-6">ABOUT</h1>
      <div className="text-center text-gray-700 mb-8">
        <p>
        Motivated Junior Front End Developer with a solid foundation in web development technologies, including HTML, CSS and JavaScript . Leveraging a background in customer service to bring a user-centric approach to design and problem-solving. Proven ability to communicate effectively, manage projects, and collaborate with cross-functional teams. Eager to apply technical skills and a strong work ethic to contribute to dynamic web development projects.

        </p>
      </div>

      <div className="flex justify-center items-start gap-8">
      
        <div>
          <img
            src={headshot}
            alt="Profile"
            className="w-64 h-80 rounded-md"
          />
        </div>

  
        <div className="text-gray-700">
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="font-semibold mr-2">Website:</span>
              <a
                href=""
                className="text-blue-500 hover:underline"
              >
                https://evelynyaabaidoo.netlify.app/
              </a>
            </li>
            <li className="flex items-center">
              <span className="font-semibold mr-2">Phone:</span>
              <a href="tel:+233243251339" className="text-blue-500 hover:underline">
                +233 54 091 6717
              </a>
            </li>
            <li className="flex items-center">
              <span className="font-semibold mr-2">City:</span>
              <span>Accra, GHANA</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold mr-2">Email:</span>
              <a
                href=""
                className="text-blue-500 hover:underline"
              >
                evelynyaabaidoo@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <a
                href=""
                className="text-blue-500 hover:underline"
              >
                evelynyaabaidoo@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
