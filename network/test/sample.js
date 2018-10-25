/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;

require('chai').should();

// const network = 'zerotoblockchain-network';
const _timeout = 90000;
const NS = 'org.acme.Z2BTestNetwork';
const courseNo = '12345';
const studentID = 'beststudentever@email.com';
const registrarID = 'registeringYouSinceYouWereBorn@email.com';
const cashierID = 'weTakeYoMoneys';
const reasonForCancellation = 'Scooby Doo is AWESOME';
const reasonForRejection = '3.14159265358979323846';
/*

const orderNo = '12345';
const buyerID = 'billybob@email.com';
const sellerID = 'simon@email.com';
const providerID = 'everythingNow@email.com';
const shipperID = 'everythingReallyFast@email.com';
const financeCoID = 'GlobalFinancier';
const dispute = 'ordered products received but defective';
const resolve = 'defective products will be refunded';
const backorder = 'order received, products on backorder. Will be shipped in 2 weeks.';
let shipper;
let provider;
let financeCo;
let orderAmount = 0;
let orderStatus = {
    'Created': {'code': 1, 'text': 'Order Created'},
    'Bought': {'code': 2, 'text': 'Order Purchased'},
    'Cancelled': {'code': 3, 'text': 'Order Cancelled'},
    'Ordered': {'code': 4, 'text': 'Order Submitted to Provider'},
    'ShipRequest': {'code': 5, 'text': 'Shipping Requested'},
    'Delivered': {'code': 6, 'text': 'Order Delivered'},
    'Delivering': {'code': 15, 'text': 'Order being Delivered'},
    'Backordered': {'code': 7, 'text': 'Order Backordered'},
    'Dispute': {'code': 8, 'text': 'Order Disputed'},
    'Resolve': {'code': 9, 'text': 'Order Dispute Resolved'},
    'PayRequest': {'code': 10, 'text': 'Payment Requested'},
    'Authorize': {'code': 11, 'text': 'Payment Approved'},
    'Paid': {'code': 14, 'text': 'Payment Processed'},
    'Refund': {'code': 12, 'text': 'Order Refund Requested'},
    'Refunded': {'code': 13, 'text': 'Order Refunded'}
};
*/


/**
 * create an empty course
 * @param {createCourseTemplate} _inbound - Order created with factory.newResource(NS, 'Order', orderNo)
 * @returns {Course} - updated order item with all required fields except for relationships (student, registrar)
 * @utility
 */
function createCourseTemplate (_inbound)
{
    inbound.created = '';
    inbound.registered = '';
    inbound.dropped = '';
    inbound.tuitionRequested = '';
    inbound.tuitionPaid = '';
    inbound.refunded = '';
    inbound.registrationStatusAccepted = '';
    inbound.registrationStatisDenied = '';
    inbound.registrationSTatusForwarded = '';
    inbound.courseCancelled = '';
    return(_inbound);
    /** 
    _inbound.orderNumber = '';
    _inbound.amount = 0;
    _inbound.items = [];
    _inbound.status = JSON.stringify(orderStatus.Created);
    _inbound.created = new Date().toISOString();
    _inbound.cancelled = '';
    _inbound.ordered = '';
    _inbound.bought = '';
    _inbound.dateBackordered = '';
    _inbound.requestShipment = '';
    _inbound.delivered = '';
    _inbound.delivering = '';
    _inbound.disputeOpened = '';
    _inbound.disputeResolved = '';
    _inbound.orderRefunded = '';
    _inbound.paymentRequested = '';
    _inbound.approved = '';
    _inbound.paid = '';
    _inbound.dispute = '';
    _inbound.resolve = '';
    _inbound.backorder = '';
    _inbound.refund = '';
    return(_inbound);
    */
}
/**
 * update an empty order with 4 items. update the amount field based on the sum of the line items
 * @param {addItems} _inbound - Order created with factory.newResource(NS, 'Order', orderNo)
 * @returns {Order} - updated order item with all required fields except for relationships (buyer, seller)
 * @utility
 */
/*
function addItems (_inbound)
{
    _inbound.items.push('{"itemNo": 1, "itemDescription": "Macbook Pro 16Gb, 1Tb", "quantity": 2, "unitPrice": 1285, "extendedPrice": 3470}');
    _inbound.items.push('{"itemNo": 2, "itemDescription": "Macbook Pro 8Gb, .5Tb", "quantity": 3, "unitPrice": 985, "extendedPrice": 2955}');
    _inbound.items.push('{"itemNo": 3, "itemDescription": "Lenovo Thinkpad W520 16Gb, .25Tb", "quantity": 1, "unitPrice": 500, "extendedPrice": 500}');
    _inbound.items.push('{"itemNo": 4, "itemDescription": "Lenovo Thinkpad W520 32Gb, 1Tb", "quantity": 4, "unitPrice": 1565, "extendedPrice": 6260}');
    _inbound.amount = JSON.parse(_inbound.items[0]).extendedPrice;
    _inbound.amount += JSON.parse(_inbound.items[1]).extendedPrice;
    _inbound.amount += JSON.parse(_inbound.items[2]).extendedPrice;
    _inbound.amount += JSON.parse(_inbound.items[3]).extendedPrice;
    orderAmount= _inbound.amount;
    return (_inbound);
}
*/

describe('Finance Network', function () {
    this.timeout(_timeout);
    let businessNetworkConnection;
    before(function () {
        businessNetworkConnection = new BusinessNetworkConnection();
        return businessNetworkConnection.connect('admin@zerotoblockchain-network');
    });

    /*
    describe('#createOrder', () => {

        it('should be able to create an order', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();
            // create the buyer
            const buyer = factory.newResource(NS, 'Buyer', buyerID);
            buyer.companyName = 'billybob computing';

            // create the seller
            const seller = factory.newResource(NS, 'Seller', sellerID);
            seller.companyName = 'Simon PC Hardware, Inc';

            // create the provider
            provider = factory.newResource(NS, 'Provider', providerID);
            provider.companyName = 'Ginsu Knife Specialists';

            // create the shipper
            shipper = factory.newResource(NS, 'Shipper', shipperID);
            shipper.companyName = 'Fastest Ever Shippers';

            // create the financeCo
            financeCo = factory.newResource(NS, 'FinanceCo', financeCoID);
            financeCo.companyName = 'The Global Financier';

            // create the order
            let order = factory.newResource(NS, 'Order', orderNo);
            order = createOrderTemplate(order);
            order = addItems(order);
            order.orderNumber = orderNo;

            // create the buy transaction
            const createNew = factory.newTransaction(NS, 'CreateOrder');

            order.buyer = factory.newRelationship(NS, 'Buyer', buyer.$identifier);
            order.seller = factory.newRelationship(NS, 'Seller', seller.$identifier);
            order.provider = factory.newRelationship(NS, 'Provider', provider.$identifier);
            order.shipper = factory.newRelationship(NS, 'Shipper', shipper.$identifier);
            order.financeCo = factory.newRelationship(NS, 'FinanceCo', financeCo.$identifier);
            createNew.financeCo = factory.newRelationship(NS, 'FinanceCo', financeCo.$identifier);
            createNew.order = factory.newRelationship(NS, 'Order', order.$identifier);
            createNew.buyer = factory.newRelationship(NS, 'Buyer', buyer.$identifier);
            createNew.seller = factory.newRelationship(NS, 'Seller', seller.$identifier);
            createNew.amount = order.amount;
            // the buyer should of the commodity should be buyer
            //order.buyer.$identifier.should.equal(buyer.$identifier);
            JSON.parse(order.status).text.should.equal(orderStatus.Created.text);
            order.amount.should.equal(orderAmount);
            createNew.amount.should.equal(orderAmount);
            createNew.order.$identifier.should.equal(orderNo);
            */
    describe('#createCourse', () => {

        it('should be able to create a course', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();
            // create the student
            const student = factory.newResource(NS, 'Student', studentID);
            student.companyName = 'Jimbo';

            // create the registrar
            const registrar = factory.newResource(NS, 'Registrar', registrarID);
            registrar.companyName = 'Wake Tech Registrar';

            // create the cashier
            cashier = factory.newResource(NS, 'Cashier', cashierID);
            cashier.companyName = 'Wake Tech Cashier';

            // create the course
            let course = factory.newResource(NS, 'Course', courseNo);
            course = createCourseTemplate(course);
            course = addItems(course);
            course.courseNumber = courseNo;

            // create the buy transaction
            const createNew = factory.newTransaction(NS, 'CreateCourse');

            course.student = factory.newRelationship(NS, 'Student', student.$identifier);
            order.registrar = factory.newRelationship(NS, 'Registrar', registrar.$identifier);
            order.cashier = factory.newRelationship(NS, 'Cashier', cashier.$identifier);
            createNew.cashier = factory.newRelationship(NS, 'Cashier', cashier.$identifier);
            createNew.course = factory.newRelationship(NS, 'Course', course.$identifier);
            createNew.student = factory.newRelationship(NS, 'Student', student.$identifier);
            createNew.registrar = factory.newRelationship(NS, 'Registrar', registrar.$identifier);
            createNew.amount = course.amount;
           
            JSON.parse(course.status).text.should.equal(courseStatus.Created.text);
            order.amount.should.equal(courseAmount);
            createNew.amount.should.equal(courseAmount);
            createNew.course.$identifier.should.equal(courseNo);

            // Get the asset registry.
            return businessNetworkConnection.getAssetRegistry(NS + '.Course')
                .then((assetRegistry) => {

                    // add the course to the asset registry.
                    return assetRegistry.add(course)
                        .then(() => {
                            return businessNetworkConnection.getParticipantRegistry(NS + '.Student');
                        })
                        .then((participantRegistry) => {
                            // add the student and registrar
                            return participantRegistry.addAll([student, registrar, cashier]);
                        })
                        .then(() => {
                            // submit the transaction
                            return businessNetworkConnection.submitTransaction(createNew);
                        })
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Course');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(courseNo);
                        })
                        .then((newCourse) => {
                            // the owner of the commodity should not be simon
                            newCourse.student.$identifier.should.equal(studentID);
                        });
                });
        });
    });

            /*
            // Get the asset registry.
            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {

                    // add the order to the asset registry.
                    return assetRegistry.add(order)
                        .then(() => {
                            return businessNetworkConnection.getParticipantRegistry(NS + '.Buyer');
                        })
                        .then((participantRegistry) => {
                            // add the buyer and seller
                            return participantRegistry.addAll([buyer, seller, shipper, provider]);
                        })
                        .then(() => {
                            // submit the transaction
                            return businessNetworkConnection.submitTransaction(createNew);
                        })
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should not be simon
                            newOrder.buyer.$identifier.should.equal(buyerID);
                        });
                });
        });
    });
    */

    describe('#issueRegisterRequest', () => {

        it('should be able to issue a register request', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            //create the course transaction 
            const registerNow = factory.newTRansactions(NS, 'Register'); 

            return businessNetworkConnection.getAssetRegistry(NS + '.Course')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(courseNo);
                })
                .then((newCourse) => {
                    newCourse.student.$identifier.should.equal(studentID);
                    newCourse.$identifier.should.equal(courseNo);
                    registerNow.course = factory.newRelationship(NS, 'Register', newCourse.$identifier);
                    registerNow.student = newCourse.buyer;
                    registerNow.student = newCourse.seller;
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(registerNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(courseNo);
                        })
                        .then((newCourse) => {
                            // the owner of the commodity should be buyer
                            newCourse.student.$identifier.should.equal(studentID);
                            //JSON.parse(newCourse.status).text.should.equal(orderStatus.Bought.text);
                        });

                });
        });

            
          // create the buy transaction
          //const buyNow = factory.newTransaction(NS, 'Buy');
            /*
            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);
                    buyNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    buyNow.buyer = newOrder.buyer;
                    buyNow.seller = newOrder.seller;
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(buyNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            newOrder.buyer.$identifier.should.equal(buyerID);
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Bought.text);
                        });

                });
        });
        */
    });

    describe('#issueOrderFromSupplier', () => {

        it('should be able to issue a supplier order', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the buy transaction
            const orderNow = factory.newTransaction(NS, 'OrderFromSupplier');

            return businessNetworkConnection.getParticipantRegistry(NS + '.Provider')
                .then(() => {
                    return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                })
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.provider = factory.newRelationship(NS, 'Provider', providerID);
                    orderNow.seller = factory.newRelationship(NS, 'Seller', sellerID);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Ordered.text);
                        });

                });
        });
    });
    describe('#issueRequestShipment', () => {

        it('should be able to issue a request to ship product', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the buy transaction
            const orderNow = factory.newTransaction(NS, 'RequestShipping');

            return businessNetworkConnection.getParticipantRegistry(NS + '.Shipper')
                .then((participantRegistry) => {
                    // add the shipper
                    return participantRegistry.addAll([shipper]);
                })
                .then(() => {
                    return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                })
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.provider = factory.newRelationship(NS, 'Provider', providerID);
                    orderNow.shipper = factory.newRelationship(NS, 'Shipper', shipperID);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.ShipRequest.text);
                        });

                });
        });
    });
    describe('#issueDelivery', () => {

        it('should be able to record a product delivery', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the Deliver transaction
            const orderNow = factory.newTransaction(NS, 'Deliver');

            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.shipper = factory.newRelationship(NS, 'Shipper', shipperID);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Delivered.text);
                        });

                });
        });
    });

    //describe('#issueRequestPayment', () => {
    describe('#issueTuitionRequested', () => {
        describe('#issueTuitionRequested', () => {

            it('should be able to issue a request to request payment for the course', () => {
                const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

                // create the buy transaction
                const orderNow = factory.newTransaction(NS, 'RequestPayment');

                return businessNetworkConnection.getParticipantRegistry(NS + '.Cashier')
                    .then((participantRegistry) => {
                        // add the cashier
                        return participantRegistry.addAll([cashier]);
                    })
                    .then(() => {
                        return businessNetworkConnection.getAssetRegistry(NS + '.Course');
                    })
                    .then((assetRegistry) => {
                        // re-get the commodity
                        return assetRegistry.get(courseNo);
                    })
                    .then((newCourse) => {
                        newCourse.student.$identifier.should.equal(studentID);
                        newCourse.$identifier.should.equal(courseNo);

                        orderNow.course = factory.newRelationship(NS, 'Course', newCourse.$identifier);
                        orderNow.cashier = factory.newRelationship(NS, 'Cashier', cashierID);
                        orderNow.registrar = factory.newRelationship(NS, 'Registrar', newCourse.registrar.$identifier);
                        // submit the transaction
                        return businessNetworkConnection.submitTransaction(orderNow)
                            .then(() => {
                                return businessNetworkConnection.getAssetRegistry(NS + '.Course');
                            })
                            .then((assetRegistry) => {
                                // re-get the commodity
                                return assetRegistry.get(courseNo);
                            })
                            .then((newOrder) => {
                                // the owner of the commodity should be student
                                //JSON.parse(newOrder.status).text.should.equal(orderStatus.PayRequest.text);
                            });
                    });
            });

        /*
        it('should be able to issue a request to request payment for the course', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the buy transaction
            const orderNow = factory.newTransaction(NS, 'RequestPayment');

            return businessNetworkConnection.getParticipantRegistry(NS + '.FinanceCo')
                .then((participantRegistry) => {
                    // add the financeCo
                    return participantRegistry.addAll([financeCo]);
                })
                .then(() => {
                    return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                })
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.financeCo = factory.newRelationship(NS, 'FinanceCo', financeCoID);
                    orderNow.seller = factory.newRelationship(NS, 'Seller', newOrder.seller.$identifier);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.PayRequest.text);
                        });
                });
        });
        */
        });

        describe('#authorizeTuitionPayment', () => {

            it('should be able to record a approval for order payment', () => {
                const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

                // create the Deliver transaction
                const orderNow = factory.newTransaction(NS, 'AuthorizeTuitionPayment');

                return businessNetworkConnection.getAssetRegistry(NS + '.Course')
                    .then((assetRegistry) => {
                        // re-get the commodity
                        return assetRegistry.get(courseNo);
                    })
                    .then((newCourse) => {
                        newCourse.student.$identifier.should.equal(studentID);
                        newCourse.$identifier.should.equal(courseNo);

                        orderNow.course = factory.newRelationship(NS, 'Course', newCourse.$identifier);
                        orderNow.cashier = factory.newRelationship(NS, 'Cashier', cashierID);
                        orderNow.student = factory.newRelationship(NS, 'Student', newCourse.student.$identifier);
                        // submit the transaction
                        return businessNetworkConnection.submitTransaction(orderNow)
                            .then(() => {
                                return businessNetworkConnection.getAssetRegistry(NS + '.Course');
                            })
                            .then((assetRegistry) => {
                                // re-get the commodity
                                return assetRegistry.get(courseNo);
                            })
                            .then((newCourse) => {
                                // the owner of the commodity should be buyer
                                //JSON.parse(newOrder.status).text.should.equal(orderStatus.Authorize.text);
                            });

                    });
            });
        /*
    describe('#authorizePayment', () => {

        it('should be able to record a approval for order payment', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the Deliver transaction
            const orderNow = factory.newTransaction(NS, 'AuthorizePayment');

            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.financeCo = factory.newRelationship(NS, 'FinanceCo', financeCoID);
                    orderNow.buyer = factory.newRelationship(NS, 'Buyer', newOrder.buyer.$identifier);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Authorize.text);
                        });

                });
        });
        */
    });
        /*
    describe('#Pay', () => {

        it('should be able to record an order payment', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the Deliver transaction
            const orderNow = factory.newTransaction(NS, 'Pay');

            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.financeCo = factory.newRelationship(NS, 'FinanceCo', financeCoID);
                    orderNow.seller = factory.newRelationship(NS, 'Seller', newOrder.seller.$identifier);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Paid.text);
                        });

                });
        });
    });
    */

    describe('#issueDispute', () => {

        it('should be able to record a product dispute', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the Deliver transaction
            const orderNow = factory.newTransaction(NS, 'Dispute');

            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.dispute = dispute;
                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.financeCo = factory.newRelationship(NS, 'FinanceCo', financeCoID);
                    orderNow.seller = factory.newRelationship(NS, 'Seller', newOrder.seller.$identifier);
                    orderNow.buyer = factory.newRelationship(NS, 'Buyer', newOrder.buyer.$identifier);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            newOrder.dispute.should.equal(dispute);
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Dispute.text);
                        });

                });
        });
    });

    describe('#issueResolution', () => {

        it('should be able to record a dispute resolution', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the Deliver transaction
            const orderNow = factory.newTransaction(NS, 'Resolve');

            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.resolve = resolve;
                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.financeCo = factory.newRelationship(NS, 'FinanceCo', financeCoID);
                    orderNow.seller = factory.newRelationship(NS, 'Seller', newOrder.seller.$identifier);
                    orderNow.shipper = factory.newRelationship(NS, 'Shipper', newOrder.shipper.$identifier);
                    orderNow.provider = factory.newRelationship(NS, 'Provider', provider.$identifier);
                    orderNow.buyer = factory.newRelationship(NS, 'Buyer', newOrder.buyer.$identifier);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            newOrder.resolve.should.equal(resolve);
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Resolve.text);
                        });

                });
        });
    });

    describe('#issueBackorder', () => {

        it('should be able to record a product backorder', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the Deliver transaction
            const orderNow = factory.newTransaction(NS, 'BackOrder');

            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);

                    orderNow.backorder = backorder;
                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.provider = factory.newRelationship(NS, 'Provider', providerID);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            newOrder.backorder.should.equal(backorder);
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Backordered.text);
                        });

                });
        });
    });
        describe('#issueDropCourse', () => {

            it('should be able to record a course cancellation', () => {
                const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

                // create the Deliver transaction
                const orderNow = factory.newTransaction(NS, 'DropCourse');

                return businessNetworkConnection.getAssetRegistry(NS + '.Course')
                    .then((assetRegistry) => {
                        // re-get the commodity
                        return assetRegistry.get(courseNo);
                    })
                    .then((newCourse) => {
                        newCourse.student.$identifier.should.equal(studentID);
                        newCourse.$identifier.should.equal(courseNo);

                        orderNow.course = factory.newRelationship(NS, 'Course', newCourse.$identifier);
                        orderNow.registrar = factory.newRelationship(NS, 'Registrar', newCourse.registrar.$identifier);
                        orderNow.student = factory.newRelationship(NS, 'Student', newCourse.student.$identifier);
                        orderNow.cashier = factory.newRelationship(NS, 'Cashier', newCourse.cashier.$identifier);
                        // submit the transaction
                        return businessNetworkConnection.submitTransaction(orderNow)
                            .then(() => {
                                return businessNetworkConnection.getAssetRegistry(NS + '.Course');
                            })
                            .then((assetRegistry) => {
                                // re-get the commodity
                                return assetRegistry.get(courseNo);
                            })
                            .then((newOrder) => {
                                // the owner of the commodity should be buyer
                                //JSON.parse(newOrder.status).text.should.equal(orderStatus.Cancelled.text);
                            });

                    });
            });
        });
        /*
    describe('#issueCancel', () => {

        it('should be able to record an order cancellation', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the Deliver transaction
            const orderNow = factory.newTransaction(NS, 'OrderCancel');

            return businessNetworkConnection.getAssetRegistry(NS + '.Order')
                .then((assetRegistry) => {
                    // re-get the commodity
                    return assetRegistry.get(orderNo);
                })
                .then((newOrder) => {
                    newOrder.buyer.$identifier.should.equal(buyerID);
                    newOrder.$identifier.should.equal(orderNo);
                    
                    orderNow.order = factory.newRelationship(NS, 'Order', newOrder.$identifier);
                    orderNow.seller = factory.newRelationship(NS, 'Seller', newOrder.seller.$identifier);
                    orderNow.buyer = factory.newRelationship(NS, 'Buyer', newOrder.buyer.$identifier);
                    // submit the transaction
                    return businessNetworkConnection.submitTransaction(orderNow)
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.Order');
                        })
                        .then((assetRegistry) => {
                            // re-get the commodity
                            return assetRegistry.get(orderNo);
                        })
                        .then((newOrder) => {
                            // the owner of the commodity should be buyer
                            JSON.parse(newOrder.status).text.should.equal(orderStatus.Cancelled.text);
                        });

                });
        });
    });
    */

});

/**
 * display using console.log the properties of the inbound object
 * @param {displayObjectProperties} _name - string name of object
 * @param {displayObjectProperties}  _obj - the object to be parsed
 * @utility
 */
/*
function displayObjectProperties(_name, _obj)
{
    for(let propt in _obj){ console.log(_name+' object property: '+propt ); }
}
*/
/**
 * display using console.log the properties of each property in the inbound object
 * @param {displayObjectProperties} _string - string name of object
 * @param {displayObjectProperties}  _object - the object to be parsed
 * @utility
 */
/*
function displayObjectValues (_string, _object)
{
    for (let prop in _object){
        console.log(_string+'-->'+prop+':\t '+(((typeof(_object[prop]) === 'object') || (typeof(_object[prop]) === 'function'))  ? typeof(_object[prop]) : _object[prop]));
    }
}
*/
