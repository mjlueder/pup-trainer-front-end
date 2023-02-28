import styles from './About.module.css'

const About = (): JSX.Element => {

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About Pup Trainer</h1>
        <div className={styles.images}>
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677530274/gahpbezc936unkk76jsw.jpg" alt="Teddy the destroyer" className={styles.img} />
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677531245/as6yurp2med2y6xd6rvx.jpg" alt="Teddy the destroyer" className={styles.img} />
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677530294/e44ckmcww0upr6194u5g.jpg" alt="Teddy the destroyer" className={styles.img} />
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677531178/m19qbairsybizoghegfh.jpg" alt="Teddy the destroyer" className={styles.img} />
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677530377/t0zdjph3za2b1mz7gvgi.jpg" className={styles.img} />
        </div>
        <div>
          <h4>
            Meet Teddy, the inspiration behind Pup Trainer. Teddy had a challenging start in life and arrived at his forever home with a lot of baggage, including being underweight, injured, leash reactive, dog reactive, and suffering from significant separation and crate anxiety. Despite my extensive background as an animal trainer and husbandry professional, I struggled to manage Teddy's behavior and sought additional resources to help him thrive.
          </h4>
          <h4>
            Unfortunately, I found that while there are numerous dog training resources available online, it can be difficult to distinguish the effective and reputable ones from the rest. That's why I created Pup Trainer: to provide dog owners with access to legitimate, positive, and effective training materials that will help strengthen the bond between you and your furry companion while teaching them valuable skills for interacting with the human world.
          </h4>
          <h4>
            Training your dog is not only fun but also essential for their well-being and the overall happiness of your household. With Pup Trainer, you can skip the frustrating and time-consuming search for quality training resources and dive straight into the joy of bonding with your pup.
          </h4>
        </div>
    </main>
  )
}

export default About