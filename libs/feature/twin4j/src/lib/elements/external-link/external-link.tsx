import './external-link.module.scss';

/* eslint-disable-next-line */
export interface ExternalLinkProps {title:string, url:string}

export const ExternalLink:React.FC<ExternalLinkProps> = ({title, url}) => (<a className="hover:text-current" href={url}>{title}</a>)

export default ExternalLink;
