

const skills = [
  ["Proficient with the use of Html,Css,JavaScript and React", "Excellent with the use of Git & GitHub"],
  ["Excellent Communication & Interpersonal Skills", "Quality Time Management"],
  ["Proficient with Customer Service", "Good Leadership Skills"],
  ["Execellent Delivery of Result even under Pressure", "Execellent Detailed Organization Skills"],
  ["Negotiation Skills", "Proficient with microsoft suite (Excel, Word & PowerPoint, Outlook and SharePoint)"],
  
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">SKILLS</h2>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to my skills showcase! Below, you'll find a comprehensive overview of the expertise I bring to the table.
        
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {skills.map((skillPair, index) => (
          <React.Fragment key={index}>
            <div className="text-left">
              {skillPair[0] && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800">{skillPair[0]}</h3>
                  <div className="h-1 bg-blue-600 w-full my-2"></div>
                </>
              )}
            </div>
            <div className="text-left">
              {skillPair[1] && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800">{skillPair[1]}</h3>
                  <div className="h-1 bg-blue-600 w-full my-2"></div>
                </>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skills;
