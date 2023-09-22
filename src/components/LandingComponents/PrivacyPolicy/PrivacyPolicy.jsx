import ToggleButton from "../../ToggleButton/ToggleButton"
import sheild from '/images/sheild.svg'
import lock from '/images/lock.svg'
import './PrivacyPolicy.scss'


export default function PrivacyPolicy() {
  return (
    <section id="privacy">
        <article>
            <h1>
                Privacy Policy and <br />
                <span>Terms</span>
            </h1>
            <small>Last updated on September 12, 2023</small>

            <p>
                Below are our privacy & policy, which outline a lot of goodies. 
                it’s our aim to always take of our participant
            </p>

            <section>
                <p>
                    At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.
                </p>

                <h4>
                    Licensing Policy
                </h4>
                <h5>Here are terms of our Standard License:</h5>

                <ul>
                    <li>
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                    </li>
                    <li>
                        You are licensed to use the item available at any free source
                        sites, for your project developement
                    </li>
                </ul>

                <ToggleButton
                    text={'Read more'}
                    className={'read-more'}
                />
            </section>

        </article>


        <aside>
            <img src={sheild} alt="sheild" id="sheild" />
            <img src={lock} alt="lock" id="lock" />
        </aside>
    </section>
  )
}
