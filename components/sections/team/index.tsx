import MemberCard from "./MemberCard";
import { TeamMembersInterface } from "interfaces/TeamMembersInterface";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";

interface ComponentProps {
  teamMembers: Array<TeamMembersInterface>;
  isMobile?: Boolean;
}

const TeamSection = ({ teamMembers, isMobile }: ComponentProps) => {
  const [teamMembersShuffle, setTeamMembersShuffle] = useState([]);
  useEffect(() => {
    setTeamMembersShuffle(shuffle(teamMembers));
  }, [teamMembers]);

  return (
    <div className="md:px-32 px-8 bg-gray" id={isMobile ? "team-mobile" : "team"}>
      <div className="grid py-10">
        <h1
          className="text-center text-4xl font-bold text-gray-200"
          style={{ gridArea: "1/1" }}
        >
          TEAM
        </h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-8">
        {teamMembersShuffle.map(
          (
            {
              first_name,
              last_name,
              role,
              email,
              phone_number,
              avatar,
              avatar_mobile,
              link,
            },
            index
          ) => (
            <MemberCard
              id={index}
              key={index}
              firstName={first_name}
              lastName={last_name}
              role={role}
              email={email}
              phone={phone_number}
              img={avatar_mobile || avatar}
              i={index + 1}
              link={link?.current}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TeamSection;
