type Props = { title: string; description: string };

export default function FeatureCard({ title, description }: Props) {
  return (
    <article className="card feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
