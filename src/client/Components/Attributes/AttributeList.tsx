import React, { useState, useEffect } from 'react';
import Attribute from './Attribute';
import AddNewAttribute from './AddNewAttribute';
import Legend from './Legend';
import { TestDesignResponse } from '../../../server/domain/TestDesignResponse';
import { useParams } from 'react-router-dom';
import { Post, Put, Get } from '../../Services';
import { apiRoute } from '../../utils';

const AttributeList: React.FC = () => {
	const [loadData, setLoadData] = useState(true);
	const [testDesign, updatetestDesign] = useState<TestDesignResponse>();
	const params = useParams();

	const designId = params.designId;

	useEffect(
		function reloadData() {
			async function fetchTestDesigns() {
				try {
					const res: TestDesignResponse = await Get(apiRoute.getRoute(`testdesigns?id=${designId}`));
					updatetestDesign(res);
					setLoadData(false);
				} catch (error) {
					console.log(error);
				}
			}
			if (loadData === true) {
				fetchTestDesigns();
			}
		},
		[loadData]
	);

	const saveNewAttributeHandler = async (name: string): Promise<void> => {
		try {
			await Post(apiRoute.getRoute('attributes'), {
				designId: designId,
				name: name
			});
			setLoadData(true);
		} catch (e) {
			console.log(e);
		}
	};

	const saveNewValueHandler = async (attributeId: string, name: string): Promise<void> => {
		try {
			await Post(apiRoute.getRoute('values'), {
				attributeId: attributeId,
				name: name,
				type: 'positive'
			});
			setLoadData(true);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<React.Fragment>
			<a href={`../`}>[Home]</a>
			<h1>{testDesign?.name}</h1>
			<AddNewAttribute onSave={saveNewAttributeHandler} />
			{testDesign?.attributes.map(item => (
				<Attribute key={item._id} item={item} onSaveValue={saveNewValueHandler} />
			))}
			<a href={`../combinations/${designId}`}>Generate Combinations</a>
			<Legend />
		</React.Fragment>
	);
};

export default AttributeList;
