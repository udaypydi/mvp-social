import React, { useEffect, useState } from 'react';
import{ Segment } from 'semantic-ui-react';
import { H3 } from 'src/commons/text';

function AggregateNetworks(props) {

    const [trendingTweets, setTrendingTweets] = useState([]);

    useEffect(() => {
        fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(json => { 
                fetch(`/api/get-tweets?location=${json.countryCode}`)
                    .then(res => res.json())
                    .then(json => {
                        setTrendingTweets(json[0].trends);
                    });
            })
    }, []);

    return (
        <Segment className="w-1/4" style={{ height: 400, overflow: 'auto' }} raised>
            <H3 color="black" className="align-center text-center">Trending Tweets</H3>
            {
                trendingTweets.map(tweet => (
                    <Segment className="w-90 border-gray-200 p-2 m-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p className="m-0">{tweet.name}</p>
                        <p className="m-0">{tweet.tweet_volume}</p>
                    </Segment>
                ))
            }
            
        </Segment>
    );
}

export default AggregateNetworks;
