import data from '../../../../data/Timeline.json'
import './Timeline.scss'

export default function Timeline() {
  return (
    <section id='timeline'>
        <h1>Timeline</h1>
        <p id='breakdown'>
            Here is the breakdown of the time we anticipate 
            using for the upcoming event.
        </p>

        <aside>
            {data.map((items, index) => (
                <div
                    id="tm-content"
                    key={index}
                    className={index % 2 === 0 ? 'even' : 'odd'}
                >
                    <h3>{items.date}</h3>
                    <span>{items.id}</span>

                    {items.content.map((itm, idx) => (
                        <article key={idx}>
                            <h3>{itm.title}</h3>
                            <p>{itm.text}</p>
                        </article>
                    ))}
                </div>
            ))}
        </aside>
    </section>
  )
}
