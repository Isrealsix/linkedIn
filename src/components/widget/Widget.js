import { FiberManualRecord, Info } from '@material-ui/icons';
import './Widget.scss';

const Widget = () => {
	const newsArticle = (heading, subtitle) => (
		<div className="widget__article">
			<div className="widget__article--left">
				<FiberManualRecord />
			</div>

			<div className="widget__article--right">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className="widget">
			<div className="widget__header">
				<h2>LinkedIn News</h2>
				<Info />
			</div>
			{newsArticle(
				"What's Copilot?",
				'Github just launched an AI called "Copilot" that helps in programming'
			)}

			{newsArticle(
				"What's new with React",
				'React is massively updating its hooks'
			)}

			{newsArticle(
				'Tesla is Hiring',
				'Tesla is currently hiring "AI" to improve its system'
			)}

			{newsArticle(
				"We don't need your college degree - Elon Musk",
				"Elon Musk just anounced that they don't require college degree to hire workers"
			)}

			{newsArticle('Stay focused', 'Stay focused on your craft and succeed')}
		</div>
	);
};

export default Widget;
