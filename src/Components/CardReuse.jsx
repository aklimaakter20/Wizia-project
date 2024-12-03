import React from 'react'
import Magic from '../assets/magic.png';
import Graph from '../assets/graph.png';
import Arrow from '../assets/arrow.png';

function CardReuse() {
  const CardList = [
    {
      title: "You’re in Control",
      description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
      icon: Magic,
    },
    {
      title: "Infinitely Scalable",
      description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
      icon:  Graph,
    },
    {
      title: "Incredibly Flexible",
      description: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
      icon: Arrow
    }
  ]
  return (
    <section className='py-20'>
      <div className="container mx-auto">
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 px-5 lg:px-10 '>
          {CardList.map((item, i)=> (
              <div key= {i} className= 'gap-5'>
              <div className='max-h-12 max-w-12 w-4/5'>
                <img src={item.icon} alt="" />
              </div>
              <div>
                <h4 className='text-foreground font-bold text-xl lg:text-2xl  pb-2 pt-3'>{item.title}</h4>
                <p className='text-foreground text-sm lg:text-lg w-2/3 lg:w-4/5 '>{item.description}</p>
              </div>
            </div>
           
          ))
        }
         </div>
      </div>

    </section>
  )
}
 

export default CardReuse
