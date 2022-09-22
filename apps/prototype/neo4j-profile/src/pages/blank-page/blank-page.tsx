/* eslint-disable jsx-a11y/anchor-is-valid */
import './blank-page.css';

/* eslint-disable-next-line */
export interface BlankPageProps {}

export function BlankPage(props: BlankPageProps) {
  return (
    <div className="prose p-8 w-full">
      <h1>Blank Page</h1>
      <p>content goes here</p>
    </div>
  );
}
