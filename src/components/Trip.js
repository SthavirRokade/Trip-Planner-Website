import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"


function Trip()
{
   return(
    <div className="trip">
    <h1>Our Trip Packages</h1>
    <p>You Can discover Unique Destination using Google Map</p>
    <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Trip in Indonasia (50,000$)"
        text="Indonesia,[a] officially the Republic of Indonesia,[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest island country and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles). With over 279 million people, Indonesia is the world's fourth-most populous country and the most populous Muslim-majority country. Java, the world's most populous island, is home to more than half of the country's population."
        />
        <TripData
        image={Trip2}
        heading="Trip in Malaysia(1,50,000$)"
        text="Indonesia,[a] officially the Republic of Indonesia,[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest island country and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles). With over 279 million people, Indonesia is the world's fourth-most populous country and the most populous Muslim-majority country. Java, the world's most populous island, is home to more than half of the country's population."
        />
        <TripData
        image={Trip3}
        heading="Trip in France (2,50,000$)"
        text="Indonesia,[a] officially the Republic of Indonesia,[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest island country and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles). With over 279 million people, Indonesia is the world's fourth-most populous country and the most populous Muslim-majority country. Java, the world's most populous island, is home to more than half of the country's population."
        />

    </div>
</div>
   );
}
export default Trip;