import { CcCard } from '@neo4j-cc/ui';
import './home-page.css';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div className="w-full bg-base-100">
      <h1 className="text-base-content">Welcome to HomePage!</h1>
      <p>Isn't it lovely</p>
      <CcCard>
        <CcCard.Title>User Profile</CcCard.Title>
        <CcCard.Body>Text can go here</CcCard.Body>
      </CcCard>
    </div>
  );
}

export default HomePage;
