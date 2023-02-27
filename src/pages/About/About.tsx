import styles from './About.module.css'

const About = (): JSX.Element => {

  return (
    <main>
      <div className={styles.text}>
        <h1>About Pup Trainer</h1>
        <h4>
          Meet Teddy, the inspiration for Pup Trainer. Teddy was adopted after having a pretty rough life, and he brought a lot of baggage with him (he was underweight, injured, leash reactive, dog reactive, had significant separation and crate anxiety...)
        </h4>
        <h4>
          Prior to adopting Teddy, I worked as an animal trainer and husbandry professional for more than a decade. Even with so much experience, it was challenging to get a handle on Teddy's behavior. I started looking for additional resources, and found that, while there are many available, it was hard to find <em>good</em> training and management resources in t
        </h4>
        <h4>
          Training is a wonderful way to bond with your dog, and to teach them how to interact with the human world. When your dog knows what to do, life is more for fun and relaxed for everyone! The internet is full of resources and opinions, but sorting through them to find the <em>good</em> ones can be challenging.
        </h4>
        <h4>
          I built Pup Trainer to connect dog owners with legitimate, positive, and effective training materials online, so you and your dog can get right to the fun.
        </h4>
      </div>
    </main>
  )
}

export default About