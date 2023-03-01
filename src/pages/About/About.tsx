import styles from './About.module.css'

const About = (): JSX.Element => {

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About Pup Trainer</h1>
        <div className={styles.images}>
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677530377/t0zdjph3za2b1mz7gvgi.jpg" className={styles.img} />
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677530294/e44ckmcww0upr6194u5g.jpg" alt="Teddy the destroyer (dog)" className={styles.img} />
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677598648/raa8vc0urvzrqqnra0rx.jpg" alt="Roscoe and Teddy (dogs)" className={styles.img}/>
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677598576/lw1pownu4i2wezlqhyuu.jpg" alt="Roscoe (dog)" className={styles.img}/>
          <img src="https://res.cloudinary.com/dmxca77ml/image/upload/v1677598557/dflcpyme9xzzrbefsbrd.jpg" alt="Roscoe (dog)" className={styles.img}/>
        </div>
        <div>
          <h4>
            Meet Roscoe and Teddy, the inspiration behind Pup Trainer. Teddy (the hound mix) had a challenging start in life and arrived at his forever home with a lot of baggage. Despite my extensive background as an animal trainer and husbandry professional, I struggled to manage Teddy's behavior and sought additional resources to help him thrive.
          </h4>
          <h4>
            Unfortunately, I found that while there are numerous dog training resources available online, it can be difficult to distinguish the effective and reputable ones from the rest. That's why I created Pup Trainer: to provide dog owners with access to legitimate, positive, and effective training materials.
          </h4>
          <h4>
            Training your dog is not only fun but a great tool for improving their well-being and the overall happiness of your household. With Pup Trainer, you can skip the frustrating and time-consuming search for quality training resources and dive straight into the fun of bonding with your pup.
          </h4>
          <h4>
            <strong><em>About me: </em></strong>I have more than a decade of professional animal care, management, and training experience. I follow positive reinforcement principles, have a deep understanding of behavior and psychology principles, and know what makes a training plan safe, effective, and beneficial. 
          </h4>
        </div>
    </main>
  )
}

export default About