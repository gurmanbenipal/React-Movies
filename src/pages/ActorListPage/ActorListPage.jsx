import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorPage({ movies }) {
    const actorSet = new Set();
    movies.forEach((m) => {
        m.cast.forEach((a) => {
            actorSet.add(a);
        });
    });
    const actorList = Array.from(actorSet);
    return (
        <div>
            {actorList.map((actor) => (
                <ActorCard key={actor} actor={actor} />
            ))};
        </div>
    );
}