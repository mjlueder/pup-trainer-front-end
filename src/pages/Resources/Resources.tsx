import { Link } from "react-router-dom"

import Collar from '../../assets/collar-color.png'

import styles from './Resources.module.css'

const Resources = (): JSX.Element => {

  return (
    <main className={styles.content} >
      <div className={styles.header}>
        <h1>Training Resources</h1> 
        <img src={Collar} alt="dog collar" />
      </div>
      <div className={styles.resources}>
        <div className={styles.aLink}>
          <h3>Training 101</h3>
          <Link to="https://www.npr.org/2022/01/05/1070572711/dog-training-resources-methods-guide-beginners" target="_blank">
            Intro to Training
          </Link>
          <ul>
            <li>A brief beginner's guide to understanding dog training resources and methods, including tips for identifying effective and humane techniques and potential red flags to watch out for.</li>
          </ul>
          <Link to="https://youtu.be/omZt5Eu8nfE" target="_blank">
            Clicker Training Basics Video
          </Link>
          <br />
          <Link to="https://youtube.com/playlist?list=PL7kSQ4pRRYOvz9LpTU9RbYEeW5NrnufYa" target="_blank">
            Clicker Training - Video Series
          </Link>
        </div>
        <div className={styles.bLink}>
          <h3>Free Training videos</h3>
          <Link to="https://youtube.com/playlist?list=PLF26FD559887E7EA4" target="_blank">
            Kikopup: Training Basics and Puppy Training
          </Link>
          <br />
          <Link to="https://youtube.com/playlist?list=PLXtcKXk-QWogjBYMZAtA19Y5vc6AgnRAe" target="_blank">
            Kikopup: Trick Training
          </Link>
        </div>
        <div className={styles.aLink}>
          <h3 >Free Seminars</h3>
          <Link to="https://www.instinctdogtraining.com/seminars/" target="_blank">
            Instinct Dog: Seminars
          </Link>
        </div>
        <div className={styles.bLink}>
          <h3>Free Courses</h3>
          <Link to="https://onlineschool.instinctdogtraining.com/?_ga=2.222416795.1883798664.1677441355-257111406.1677441353" target="_blank">
            Instinct Dog: Training Courses
          </Link>
          <br />
          <Link to="https://www.dunbaracademy.com/bundles/free-course-collection" target="_blank">
            Dunbar Academy: Free Course Collection
          </Link>
        </div>
        <div className={styles.aLink}>
          <h3 >Behavior Managment</h3>
          <Link to="https://www.karenoverall.com/category/handouts-protocols/" target="_blank">
            Karen Overall's Protocols
          </Link>
          <ul>
            <li>
              Karen Overall's protocols for behavior modification look intimidating, but they're not hard to understand once you get into them. These are fantastic documents. There are many good resources on the site. The following two are great foundational guidelines for overall behavior improvment.
            </li>
            <li>
              <Link to="https://www.karenoverall.com/protocol-for-deference/" target="_blank">
                Protocol for Deference
              </Link>
            </li>
            <li>
              <Link to="https://www.karenoverall.com/protocol-for-relaxation-behavior-modification-tier-1/" target="_blank">
                Protocol for Relaxation
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.bLink}>
          <h3>Games and Enrichment</h3>
          <Link to="https://www.bluecross.org.uk/advice/dog/indoor-games-for-dogs" target="_blank">
            Indoor Games
          </Link>
          <br />
          <Link to="https://youtube.com/playlist?list=PLqj_se-bICd9MMJSq5cg5_m21Qn8B3Fuy" target="_blank">
            DIY Dog Toys
          </Link>
          <br />
          <Link to="https://youtu.be/pTYZ_cenuWw">
            Nose Work Games
          </Link>
          <br />
          <Link to="https://www.facebook.com/groups/DIYCanineEnrichment/" target="_blank">
            DIY Canine Enrichment
          </Link>
          <ul>
            <li>This is a public facebook group, so take it with a grain of salt and an eye towards evaluating safety, but people share some great and creative ideas here</li>
          </ul>
        </div>
        <div className={styles.aLink}>
          <h3 >Reactive Dog Resources</h3>
          <h5><em>DISCLAIMER!</em> While these resources can be beneficial, some dogs need more training than non-professionals can provide. If your dog is reactive or aggressive, a good trainer or behaviorist may be your best option. I cannot evaluate or advise on individual cases.</h5>
          <Link to="https://youtube.com/playlist?list=PLXtcKXk-QWojGYcl1NCg5UA5geEnmpx4a" target="_blank">
            Kikopup: Reactivity & Barking Playlist
          </Link>
          <br />
          <Link to="https://youtube.com/playlist?list=PLqj_se-bICd_yaGWw86hhq2S-ZXiZ5V8p" target="_blank">
            Reactive Dog Video Playlist
          </Link>
        </div>
        <div className={styles.bLink}>
          <h3>Finding a certified trainer or behaviorist</h3>
          <Link to="https://www.petmd.com/dog/behavior/do-you-need-hire-dog-behaviorist" target="_blank">
            Do you need a trainer or a behaviorist?
          </Link>
          <br />
          <Link to="https://karenpryoracademy.com/find-a-trainer/?source=hpsb#!directory/map" target="_blank">
            Karen Pryor Certified Trainers
          </Link>
          <br />
          <Link to="https://www.forcefree-dogtraining.org/force-free-trainers/" target="_blank">
            Force-Free Trainers
          </Link>
          <br />
          <Link to="https://avsab.org/directory/" target="_blank">
            Find a Veterinary Behaviorist
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Resources