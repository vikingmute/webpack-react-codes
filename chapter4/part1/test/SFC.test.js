import React from 'react';
import { expect } from 'chai';
import List from '../app/components/List';
import ListItem from '../app/components/ListItem';
import ItemShowLayer from '../app/components/ItemShowLayer';
import TestUtils from 'react-addons-test-utils';


describe('testing all stateless component', function () {
  const testData = [
    {
      "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
      "title": "Hello",
      "content": "# testing markdown",
      "time": 1458030208359
    }, {
      "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775b",
      "title": "Hello2",
      "content": "# Hello world",
      "time": 1458030208359
    }
  ];
  function createRender(Component, props) {
    const renderer = TestUtils.createRenderer();

    renderer.render(<Component {...props}/>);
    return renderer.getRenderOutput();
  }
  it('test List component', function() {
    const props = {
      items: testData
    }
    const list =  createRender(List, props);
    const len = list.props.children.length;
    expect(len).to.equal(2);
  })
  it('test ListItem component', function() {
    const props = {
      item: testData[0]
    };
    const listItem = createRender(ListItem, props);
    expect(listItem.props.children[1].props.children).to.equal(testData[0].title);
    expect(listItem.props.children[0].type).to.equal('span');
  })
  it('test ItemShowLayer component with no data', function() {
    const nullProps = {
      item: null
    }
    const itemShowLayer = createRender(ItemShowLayer, nullProps);
    const textTag = itemShowLayer.props.children.props;
    expect(textTag.className).equal('no-select');
  })
  it('test ItemShowLayer component with provided data', function() {
    const props = {
      item: testData[0]
    }
    const itemShowLayer = createRender(ItemShowLayer, props);
    const title = itemShowLayer.props.children[1];
    expect(title.type).equal('h2');
    expect(title.props.children).equal(testData[0].title);
  })
})
