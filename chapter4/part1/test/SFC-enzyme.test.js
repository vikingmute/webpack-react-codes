import React from 'react';
import { expect } from 'chai';
import List from '../app/components/List';
import ListItem from '../app/components/ListItem';
import ItemShowLayer from '../app/components/ItemShowLayer';
import ItemEditor from '../app/components/ItemEditor';
import CreateBar from '../app/components/CreateBar';
import Deskmark from '../app/components/Deskmark';
import { shallow, mount } from 'enzyme';

describe("Testing all the SFC using enzyme", function() {
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

  it('test List component using Enzyme', () => {
    let list = shallow(<List items={testData} />);
    expect(list.find(ListItem).length).to.equal(testData.length);
  })
  it('test ListItem component using Enzyme', () => {
    let listItem = shallow(<ListItem item={testData[0]} />);
    expect(listItem.childAt(1).text()).to.equal(testData[0].title);
    expect(listItem.hasClass('list-group-item')).to.be.true;
  })
  it('test ItemShowLayer with no data using Enzyme', () => {
    let itemShowLayer = shallow(<ItemShowLayer item = {null}/>);
    expect(itemShowLayer.find('.no-select').length).to.equal(1);
    expect(itemShowLayer.hasClass('item-show-layer-component'));
  })
  it('test ItemShowLayer with data using Enzyme', () => {
    let itemShowLayer = shallow(<ItemShowLayer item={testData[0]}/>);
    expect(itemShowLayer.find('h2').text()).to.equal(testData[0].title);
    expect(itemShowLayer.hasClass('item-show-layer-component'));
  })
  it('test ItemEditor with no data using Enzyme', () => {
    let itemEditor = shallow(<ItemEditor item={null}/>);
    expect(itemEditor.find('.btn-success').text()).to.equal('创建');
    expect(itemEditor.find('input').props().defaultValue).to.equal('');
    expect(itemEditor.find('textarea').props().defaultValue).to.equal('');
  })
  it('test ItemEditor with data using Enzyme', () => {
    let itemEditor = shallow(<ItemEditor item={testData[0]}/>);
    expect(itemEditor.find('.btn-success').text()).to.equal('保存');
    expect(itemEditor.find('input').props().defaultValue).to.equal(testData[0].title);
    expect(itemEditor.find('textarea').props().defaultValue).to.equal(testData[0].content);
  })
  it('test Deskmark inital load with Enzyme', () => {
    let deskmark = shallow(<Deskmark/>);
    expect(deskmark.find(CreateBar).length).to.equal(1);
    expect(deskmark.find(ItemShowLayer).length).to.equal(1);
    expect(deskmark.find(ItemEditor).length).to.equal(0);
    expect(deskmark.find(List).length).to.equal(1);
  })
  it('test Deskmark create one post and delete a post', () => {
    // I think it is hard to do the UI stuff with shallow render,
    // the dom-render is more reasonable and more clear
    /*let deskmark = shallow(<Deskmark/>);
    deskmark.find(CreateBar).simulate('click');
    expect(deskmark.find(ItemEditor).length).to.equal(1);
    expect(deskmark.find(ItemShowLayer).length).to.equal(0);
    console.log(deskmark.find(ItemEditor).props());
    deskmark.find(ItemEditor).props().onSave({'title': 'test', 'content': '#testing markdown'});
    expect(deskmark.find(ItemShowLayer).length).to.equal(1);*/
    let deskmark = mount(<Deskmark/>);
    //click the create button
    deskmark.find('.create-bar-component').simulate('click');
    expect(deskmark.find('.item-editor-component').length).to.equal(1);
    expect(deskmark.find('.item-show-layer-component').length).to.equal(0);
    expect(deskmark.find('.item-component').length).to.equal(0);
    //set input and textarea
    let input = deskmark.find('input');
    input.node.value = 'new title';
    input.simulate('change', input);
    let textarea = deskmark.find('textarea');
    textarea.node.value = '#looks good';
    textarea.simulate('change', textarea);
    //click save button
    deskmark.find('.btn-success').simulate('click');
    //editor should gone, showLayer should show
    expect(deskmark.find('.item-editor-component').length).to.equal(0);
    expect(deskmark.find('.item-show-layer-component').length).to.equal(1);
    //list should have one item
    expect(deskmark.find('.item-component').length).to.equal(1);
    //the first item should have the same title
    expect(deskmark.find('.item-component').first().find('.item-title').text()).to.equal('new title');
    //click the first item
    deskmark.find('.item-component').first().simulate('click');
    //the showLayer editor should have the new title
    expect(deskmark.find('.item-show-layer-component h2').text()).to.equal('new title');
    //click the delete button
    deskmark.find('.btn-danger').simulate('click');
    //the itemlist should be empty
    expect(deskmark.find('.item-component').length).to.equal(0);
  })
});
