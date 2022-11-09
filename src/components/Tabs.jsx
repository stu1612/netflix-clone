// npm
import { useState } from "react";

export default function Tabs({ mediaDetail }) {
  // local state
  const [activeTab, setActiveTab] = useState("tab1");

  // properties
  const { overview, production_companies, revenue } = mediaDetail;

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="Overview"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Grossing"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Production"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <p>{overview}</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>$ {revenue}</p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>{production_companies.map((item) => item.name)}</p>
        </TabContent>
      </div>
    </div>
  );
}

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </li>
  );
};

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="TabContent">{children}</div> : null;
};
