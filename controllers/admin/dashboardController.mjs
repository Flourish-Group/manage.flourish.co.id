import { renderDashboardIndexPage } from '../../views/admin/dashboard.mjs';

const renderDashboardIndex = (req, res) => {
  const pageContent = renderDashboardIndexPage();
  res.send(pageContent);
};

export {
  renderDashboardIndex,
};