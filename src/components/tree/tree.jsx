import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

const Tree = (props) => {
  this.state = {
    treeData: [
      { title: 'Chicken', children: [{ title: 'Egg' }] },
      { title: 'Fish', children: [{ title: 'fingerline' }] },
    ],
  };

  return (
    <div style={{ height: 400 }}>
      <SortableTree
        treeData={this.state.treeData}
        onChange={(treeData) => this.setState({ treeData })}
      />
    </div>
  );
};

export default Tree;
