import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/5.jpg'
import Mountain4 from '../assets/8.jpg'
import DestinationData from './DestinationData'
import './DestinationStyles.css'
const Destination = () =>{
  return(
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours Gives You Oppurtunity to Leave</p>
      
       <DestinationData    
       className="first-destination" 
       heading="Taal Volcano,Batangas"
       text="Taal Volcano (IPA: [taʔal]; Tagalog: Bulkang Taal) is a large caldera filled by Taal Lake in the Philippines.[1] Located in the province of Batangas about 50 kilometers (31 mi) south of Manila, the volcano is the second most active volcano in the country with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake.[3] The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP.[4][5]"
       img1={Mountain1}
       img2={Mountain2}
       />
        <DestinationData 
        className="first-destination-reverse"
       heading="Mt.Daguldul,Batangas"
       text="Mount Daguldol is within the vicinity of the town of San Juan in Batangas. Normally it will take you around 3 hours to reach the jump off point Barrio Hugom by private vehicle.

       The site has been a favorite trekking location of mountaineers. Although quite new to other hikers, it was discovered by the University of the Philippines Mountaineers in the 1990’s.
       
       The trail is man made by the locals of San Juan, Batangas and was worked out to be trekking destination.
       
       The local government of San Juan organized the Hugom Environmental Guides Association (HEGA) to take care of the place. All climbers are required to register and pay appropriate fees and take a guide. However, the fees and cost of guide are in reasonable rates. The administrative center is situated at the jeepney terminal in Barrio Hugom."
       img1={Mountain3}
       img2={Mountain4}
       />
    </div>
  )
}
export default Destination;