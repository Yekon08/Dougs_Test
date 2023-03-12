import React, { Dispatch, SetStateAction } from "react";
import { FilterView } from "../interfaces/global";

interface Props {
  activeFilter: FilterView;
  setActiveFilter: Dispatch<SetStateAction<FilterView>>;
}

const Header = ({ activeFilter, setActiveFilter }: Props) => {
  return (
    <header>
      <div className="maxWidth">
        <h4>Catégories</h4>
        <div className="btnContainer">
          <button
            className={`btn ${activeFilter === "group" && "activeBtn"}`}
            onClick={() => {
              activeFilter !== "group" && setActiveFilter("group");
            }}
          >
            <svg width={14} height={14} fill="none">
              <path
                d="M.34 4.048l6.369 2.889a.7.7 0 00.582 0l6.37-2.89c.452-.205.452-.889 0-1.094L7.29.063a.7.7 0 00-.582 0L.34 2.953c-.452.205-.452.89 0 1.095zM13.66 6.46l-1.588-.72-4.42 2.004a1.569 1.569 0 01-1.304 0L1.928 5.74l-1.589.72c-.452.206-.452.89 0 1.094l6.37 2.887a.702.702 0 00.582 0l6.37-2.887c.452-.205.452-.888 0-1.094zm0 3.495l-1.582-.717-4.426 2.006a1.569 1.569 0 01-1.304 0L1.922 9.239l-1.583.717c-.452.205-.452.889 0 1.094l6.37 2.887a.702.702 0 00.582 0l6.37-2.887c.452-.205.452-.889 0-1.094z"
                fill={`${activeFilter === "group" ? "#11ABEC" : "#58676D"}`}
              />
            </svg>
            Groupe de catégorie
          </button>
          <button
            className={`btn ${activeFilter === "alphabetic" && "activeBtn"}`}
            onClick={() => {
              activeFilter !== "alphabetic" && setActiveFilter("alphabetic");
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5.50003 10.0001H3.99999V0.49983C3.99999 0.367218 3.94731 0.240038 3.85354 0.146267C3.75977 0.0524967 3.63259 -0.000183103 3.49998 -0.000183103H2.49995C2.36734 -0.000183103 2.24016 0.0524967 2.14639 0.146267C2.05262 0.240038 1.99994 0.367218 1.99994 0.49983V10.0001H0.499899C0.0564493 10.0001 -0.167619 10.5388 0.147077 10.8535L2.64714 13.8536C2.74091 13.9473 2.86804 14 3.00059 14C3.13315 14 3.26028 13.9473 3.35404 13.8536L5.8541 10.8535C6.16724 10.5395 5.94442 10.0001 5.50003 10.0001ZM13.0002 8.00003H9.00013C8.86752 8.00003 8.74033 8.05271 8.64656 8.14648C8.55279 8.24025 8.50011 8.36743 8.50011 8.50004V9.50007C8.50011 9.63268 8.55279 9.75986 8.64656 9.85363C8.74033 9.94741 8.86752 10.0001 9.00013 10.0001H10.7502L8.83575 12.2017C8.73019 12.2955 8.6457 12.4107 8.58785 12.5395C8.53 12.6684 8.5001 12.808 8.50011 12.9492V13.5002C8.50011 13.6328 8.55279 13.76 8.64656 13.8537C8.74033 13.9475 8.86752 14.0002 9.00013 14.0002H13.0002C13.1328 14.0002 13.26 13.9475 13.3538 13.8537C13.4476 13.76 13.5002 13.6328 13.5002 13.5002V12.5002C13.5002 12.3675 13.4476 12.2404 13.3538 12.1466C13.26 12.0528 13.1328 12.0001 13.0002 12.0001H11.2502L13.1646 9.79852C13.2702 9.70468 13.3547 9.58956 13.4125 9.46071C13.4704 9.33187 13.5003 9.19223 13.5002 9.051V8.50004C13.5002 8.36743 13.4476 8.24025 13.3538 8.14648C13.26 8.05271 13.1328 8.00003 13.0002 8.00003ZM13.9709 5.33183L12.1186 0.331701C12.084 0.234562 12.0201 0.150526 11.9358 0.0911101C11.8515 0.0316942 11.7508 -0.000193648 11.6477 -0.000183103H10.3527C10.2495 -0.000193648 10.1489 0.0316942 10.0646 0.0911101C9.98027 0.150526 9.9164 0.234562 9.88171 0.331701L8.02948 5.33183C8.00254 5.40727 7.99413 5.48808 8.00494 5.56744C8.01575 5.64681 8.04547 5.72242 8.09159 5.78791C8.13772 5.85339 8.19891 5.90684 8.27 5.94374C8.34109 5.98065 8.42001 5.99994 8.50011 5.99998H9.27607C9.38183 6.00001 9.48487 5.96651 9.57039 5.9043C9.65591 5.84208 9.7195 5.75435 9.75202 5.65372L9.89015 5.24996H12.109L12.2468 5.65372C12.2794 5.75455 12.3431 5.84243 12.4289 5.90467C12.5147 5.9669 12.618 6.00028 12.724 5.99998H13.5002C13.5803 5.99994 13.6593 5.98065 13.7304 5.94374C13.8015 5.90684 13.8626 5.85339 13.9088 5.78791C13.9549 5.72242 13.9846 5.64681 13.9954 5.56744C14.0062 5.48808 13.9978 5.40727 13.9709 5.33183ZM10.488 3.49991L11.0002 1.99987L11.5124 3.49991H10.488Z"
                fill={`${
                  activeFilter === "alphabetic" ? "#11ABEC" : "#58676D"
                }`}
              />
            </svg>
            Ordre alphabétique
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
