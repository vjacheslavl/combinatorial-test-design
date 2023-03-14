import React, { useState, useEffect } from "react";
import { Get } from "../../Services";
import { apiRoute } from "../../utils";
import { useParams } from "react-router-dom";
import { Combination } from "../../../server/domain/Combinations";
import ValueItem from "../Attributes/Values/ValueItem";
import { ValueResponse } from "../../../server/domain/TestDesignResponse";

const ComibinationsTable: React.FC = () => {
      const [loadData, setLoadData] = useState(true);
      const [combinations, updateCombinations] = useState<Combination[]>([]);
      const params = useParams();

      const designId = params.designId;

      useEffect(
            function reloadData() {
                  async function fetchCombinations() {
                        try {
                              const res: Combination[] = await Get(apiRoute.getRoute(`combinations?id=${designId}`));
                              updateCombinations(res);
                              setLoadData(false);
                        } catch (error) {
                              console.log(error);
                        }
                  }
                  if (loadData === true) {
                        fetchCombinations();
                  }
            },
            [loadData]
      );


      const result = combinations.map((i) => new Map(i.values))
      console.log(result)

      //       Array(8)
      // 0: Map(4) {'A1' => {…}, 'A2' => {…}, 'A3' => {…}, 'A4' => {…}}
      // 1: Map(4) {'A1' => {…}, 'A2' => {…}, 'A3' => {…}, 'A4' => {…}}
      // 2: Map(4) {'A1' => {…}, 'A2' => {…}, 'A3' => {…}, 'A4' => {…}}
      // 3: Map(4) {'A1' => {…}, 'A2' => {…}, 'A3' => {…}, 'A4' => {…}}
      // 4: Map(4) {'A1' => {…}, 'A2' => {…}, 'A3' => {…}, 'A4' => {…}}
      // 5: Map(4) {'A1' => {…}, 'A2' => {…}, 'A3' => {…}, 'A4' => {…}}
      // 6: Map(4) {'A1' => {…}, 'A2' => {…}, 'A3' => {…}, 'A4' => {…}}
      // 7: Map(4) {'A1' => {…}, 'A2' => {…}, 'A3' => {…}, 'A4' => {…}}

      let columnNames = []
      if (result.length > 0) {
            columnNames = [...result[0].keys()] as []
      }

      const emptyDeleteHandler = (valueId: string) => {
            console.log(`can't delete ${valueId}`)
      }

      return (
            <div>
                  <a href={`../`}>[Home]</a>
                  <a href={`../testdesigns/${designId}`}>[Edit design]</a>
                  <div>{combinations.length} combinations generated using Linear Expansion approach</div>
                  <table className="combinationsTable">
                        <tr>
                              <td>Att.</td>{combinations.map((i, cIdx) => <td key={cIdx}><div className="combinationHeader">{i.name}</div></td>)}
                        </tr>
                        {columnNames.map((cn, cnIdx) => <tr key={cnIdx}><td>{cn}</td>
                              {result.map((r, idx) => <td key={idx}><ValueItem content={r.get(cn) as ValueResponse} canDelete={false} onDeleteValue={emptyDeleteHandler} /></td>)}
                        </tr>
                        )}
                  </table>
            </div>
      );
};


export default ComibinationsTable;