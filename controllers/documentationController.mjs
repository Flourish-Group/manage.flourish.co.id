import {renderDocumentationIndexPage} from '../views/api/documentation.mjs';

const renderDocumentationIndex = (req, res) => {
  const pageContent = renderDocumentationIndexPage();
  res.send(pageContent);
};

export {
  renderDocumentationIndex,
};
