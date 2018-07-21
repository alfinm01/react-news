// bikin static komponen nya
// panggil via api
// yang mau di tampilkan sumber berita

import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

const key = "55c9c0cd7abb4a27aacd16defc76c525";
const sources = "https://newsapi.org/v2/top-headlines?country=id&apiKey=" + key;
const dariSemantic = "https://react.semantic-ui.com";
const iconLocator = "https://icon-locator.herokuapp.com/icon?size=70..120..200";

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(sources)
      .then(result => {
        console.log(result, "Success");
        this.setState({
          data: result.data.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message, "Failed");
        this.setState({
          loading: false,
          error: error.message
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
          <Image src={`${dariSemantic}/images/wireframe/short-paragraph.png`} />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }

    return (
      <Card.Group>
        {data.map(source => {
          return (
            <Card key={source.id}>
              <Image size="medium" src={source.urlToImage} />
              <Card.Content>
                <Card.Header>{source.title}</Card.Header>
                <Card.Description>{source.description}</Card.Description>
                <Card.Content>{source.author}</Card.Content>
                <Card.Meta>{source.publishedAt}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export default NewsList;
