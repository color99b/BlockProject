import MainDropDownContainer from '../containers/MainDropDown';
import FooterContainer from '../containers/Footer';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AllWallet from '../components/AllWallet';
import etherSmall from '../imgs/ethereum-original.svg';
import spon from '../imgs/spon1.png';
import { useState, useEffect } from 'react';
import NotFoundComponent from '../components/NotFound';
import SpeakBubbleComponent from '../components/SpeakBubble';
const ViewWalletPage = () => {
    const request = axios.create({
        baseURL: 'http://localhost:8080/api',
    });
    const [wallet, setWallet] = useState();
    const [receivedWallet, setReceivedWallet] = useState();

    const [walletLength, setWalletLentgth] = useState();

    const location = useLocation();
    const address = location.search.slice(1);
    const [pageNum, setPageNum] = useState(1);
    const [viewCount, setViewCount] = useState(10);
    const [balance, setBalance] = useState();
    async function getWallet(address, num, viewCount) {
        const { data } = await request.post('/web3/getWallet', {
            value: address,
            num: num,
            viewCount: viewCount,
        });

        setWallet(data.info);
        setWalletLentgth(data.length);
    }

    async function getBalance(address) {
        const { data } = await request.post('/web3/getBalance', {
            value: address,
        });
        setBalance(data.balance);
    }
    useEffect(() => {
        getWallet(address, pageNum, viewCount);
        getBalance(address);
    }, [pageNum]);
    const next = (item) => {
        const arr = wallet;
        if (wallet.length < viewCount) return;
        setPageNum(pageNum + 1);
    };

    const before = (item) => {
        if (pageNum == 1) return;
        setPageNum(pageNum - 1);
    };

    const first = (item) => {
        if (pageNum == 1) return;
        setPageNum(1);
    };
    const last = (item) => {
        setPageNum(Math.ceil(walletLength / viewCount));
    };
    const pagination = `Page ${pageNum} of ${Math.ceil(walletLength / viewCount)}`;

    return (
        <>
            <MainDropDownContainer />
            {wallet ? (
                wallet[0] ? (
                    <>
                        <Main>
                            <div>
                                <BlockSpan>
                                    <WeightFont> 😆{address ? ' ' + address : 'temp'} </WeightFont>
                                </BlockSpan>
                            </div>
                            <hr />
                            <div>
                                <GraySpan>
                                    <WeightFont> Sponsored: </WeightFont>
                                </GraySpan>
                                <GraySpan>🎮bc.game - Win up to 5 BTC Everyday! Live casino + 20k slots</GraySpan>{' '}
                                <Blue>
                                    <WeightFont> Play Now </WeightFont>
                                </Blue>
                            </div>
                            <ButtonBoxRadius>
                                <ButtonRadius>🐬Lido : Execution Layer Rewards Vault</ButtonRadius>
                                <ButtonRadius autofocus>Source Code</ButtonRadius>
                                <ButtonRadius>#Lido</ButtonRadius>
                                <ButtonRadius>#Proposer Fee Recipient</ButtonRadius>
                            </ButtonBoxRadius>
                            <Status>
                                <div>
                                    <StatusSpan>Overview</StatusSpan>

                                    <div>
                                        <GraySpan>ETH BALANCE</GraySpan>

                                        <Balance>
                                            <img src={etherSmall} />
                                            {balance ? balance : 0} ETH
                                        </Balance>
                                    </div>
                                    <div>
                                        <GraySpan>ETH VALUE</GraySpan>

                                        <Balance>$ 143.4303936 (@ $ 1,641.78/ETH)</Balance>
                                    </div>
                                    <div>
                                        <GraySpan>TOKEN HOLDINGS</GraySpan>

                                        <Filter>
                                            <select>
                                                <option value="0" selected>
                                                    All Filters
                                                </option>
                                                <option value="1">Address</option>
                                                <option value="2">Tokens</option>
                                                <option value="3">NameTags</option>
                                                <option value="4">Labels</option>
                                            </select>
                                        </Filter>
                                    </div>
                                </div>
                                <div>
                                    <StatusSpan>More Info</StatusSpan>

                                    <div>
                                        <GraySpan>PRIVATE NAME TAGS</GraySpan>

                                        <Balance>
                                            <ButtonRadius
                                                style={{
                                                    padding: '0.5rem 0.5rem',
                                                    width: '5rem',
                                                    marginTop: '0.4rem',
                                                }}
                                            >
                                                + ADD
                                            </ButtonRadius>
                                        </Balance>
                                    </div>
                                    <div>
                                        <GraySpan>LAST TXN SENT</GraySpan>

                                        <Balance>
                                            <Blue>$ 143.4303936 ...</Blue>(@ $ 1,641.78/ETH)
                                        </Balance>
                                    </div>
                                    <div>
                                        <GraySpan>FIRST TXN SENT</GraySpan>

                                        <Balance>
                                            <Blue>$ 143.4303936 ...</Blue>(@ $ 1,641.78/ETH)
                                        </Balance>
                                    </div>
                                </div>
                                <div>
                                    <StatusSpan>Multi Chain</StatusSpan>

                                    <div>
                                        <GraySpan>MULTICHAIN ADDRESSES</GraySpan>

                                        <Balance>
                                            <Blue>7 addresses found via Blockscan</Blue>
                                        </Balance>
                                    </div>
                                    <SponBox>
                                        <Ad>Ad</Ad>
                                        <IMGBox>
                                            <img src={spon} alt="" srcset="" />
                                        </IMGBox>
                                    </SponBox>
                                </div>
                            </Status>

                            <ButtonBox>
                                <Button>Transactions</Button>
                                <Button>Internal Transations</Button>
                                <Button>Token Transfers(ERC-20)</Button>
                                <Button>Produced Blocks</Button>
                                <Button>Analytics</Button>
                                <Button>Comments</Button>
                            </ButtonBox>

                            <Board>
                                <BoardHead>
                                    <HeadLeft>
                                        <div>Total of 16,674,285 blocks</div>
                                        <div>(Showing blocks between #16674260 to #16674284)</div>
                                    </HeadLeft>
                                    <HeadRight>
                                        <SpeakBubbleComponent str={'Frist'} func={first} placeHold={'Go to Frist'} />
                                        <SpeakBubbleComponent
                                            str={'〈'}
                                            func={before}
                                            topPadding={'0.25'}
                                            placeHold={'Go to before'}
                                        />
                                        <SpeakBubbleComponent str={pagination} hover={'none'} />
                                        <SpeakBubbleComponent
                                            str={'〉'}
                                            func={next}
                                            topPadding={'0.25'}
                                            placeHold={'Go to next'}
                                        />
                                        <SpeakBubbleComponent str={'Last'} func={last} placeHold={'Go to Last'} />
                                    </HeadRight>
                                </BoardHead>
                                <Table>
                                    <thead>
                                        <>
                                            <Th>ρ</Th>
                                            <Th>Transaction Hash</Th>
                                            <Th>Method</Th>
                                            <Th>Block</Th>

                                            <Th>Age</Th>
                                            <Th>From</Th>
                                            <Th></Th>

                                            <Th>To</Th>
                                            <Th>Value</Th>
                                            <Th>Txn Fee</Th>
                                        </>
                                    </thead>

                                    <tbody>{wallet ? wallet.map((item) => <AllWallet item={item} />) : <></>}</tbody>
                                </Table>
                                <div></div>
                            </Board>
                            <FootAlert>
                                💡 Blocks are batches of transactions linked together via cryptographic hashes. Any
                                tampering of a block invalidates subsequent blocks as their hashes would be changed.
                                Learn more about this page in our Knowledge Base.
                            </FootAlert>
                        </Main>
                    </>
                ) : (
                    <NotFoundComponent text={address ? address : ''} type={'Address'} />
                )
            ) : (
                ''
            )}
            <FooterContainer />
        </>
    );
};

const Main = styled.div`
    padding: 2rem 7.5rem 6.5rem 5.5rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 30px 0.1px rgba(0, 0, 0, 0.1);
`;
const ButtonBox = styled.div`
    display: flex;
    padding: 0.5rem 0;
    gap: 0.4rem;
`;
const SponBox = styled.div`
    position: relative;
    width: fit-content;
`;

const Button = styled.button`
    position: relative;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.8rem;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.025);
    box-shadow: 5px 5px 15px 0.1px rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 1);
    }
    transition-duration: 0.5s;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-sizing: border-box;

    padding: 0.3rem;

    &:focus {
        color: white;
        background-color: #0784c3;
    }
    &:first-child {
        // color: red;
    }
`;

const ButtonBoxRadius = styled.div`
    display: flex;
    padding: 0.5rem 0;
    gap: 0.4rem;

    > button:nth-child(2) {
    }
`;

const Filter = styled.div`
    padding: 0.2rem;
    width: 100%;

    > select {
        padding: 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 70%;
    }
`;
const Board = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0.5rem;
    width: 100%;
    border-radius: 15px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 0.9rem;
    box-shadow: 1px 6px 15px rgba(0, 0, 0, 0.1);
    // margin-top: 0.5rem;
    // > div {
    //   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    //   padding: 1.5rem 0.5rem;
    //   display: flex;
    //   flex-direction: column;
    //   gap: 2rem;
    // }
    // > div:last-child {
    //   border: none;
    // }
    // > div > div {
    //   display: flex;

    //   & > div:first-child {
    //     width: 30%;
    //     color: rgba(0, 0, 0, 0.6);
    //     padding-left: 1rem;
    //   }

    //   & > div:last-child {
    //     font-size: 0.9rem;
    //   }
    // }
`;

const BlockSpan = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 1rem;
`;
const GraySpan = styled.span`
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.8rem;
    letter-spacing: -0.05rem;
`;

const WeightFont = styled.span`
    font-weight: bold;
`;

const Blue = styled.span`
    color: rgba(7, 132, 195);
    font-size: 0.9rem;
`;

const FootAlert = styled.div`
    color: rgba(0, 0, 0, 0.55);
    font-size: 0.8rem;
    padding-top: 0.5rem;
`;

const ButtonRadius = styled.button`
    position: relative;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.7rem;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.025);
    box-shadow: 5px 5px 15px 0.1px rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 1);
    }
    transition-duration: 0.5s;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    box-sizing: border-box;

    padding: 0.1rem 0.5rem;

    &:focus {
        color: white;
        background-color: #0784c3;
    }
    &:first-child {
        // color: red;
    }
`;
const IMGBox = styled.div`
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    > img {
    }
`;
const Ad = styled.div`
    position: absolute;
    top: -10%;
    right: 0;
    z-index: 10;
    padding: 0.3rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    border-radius: 10px;
`;

const Status = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    gap: 1.5rem;
    > div {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        border-radius: 15px;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    > div > div:first-child {
        margin-bottom: 0.3rem;
    }
`;
const Balance = styled.div`
    display: flex;
    font-size: 0.8rem;
    width: 100%;
    align-items: center;
    > img {
        width: 0.5rem;
        opacity: 0.8;
    }
`;

const StatusSpan = styled.div`
    font-size: 0.9rem;
`;

const Table = styled.table`
    text-align: center;
    padding: 0rem 0 1rem 0.3rem;
    border-collapse: collapse;
    > thead {
        gap: 10rem;
        // border-bottom: 1px solid black;
    }
`;

const Th = styled.th`
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const BoardHead = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HeadLeft = styled.div``;

const HeadRight = styled.div`
    display: flex;
    align-items: center;
    > div {
        position: relative;
    }
    gap: 0.2rem;
`;

export default ViewWalletPage;
