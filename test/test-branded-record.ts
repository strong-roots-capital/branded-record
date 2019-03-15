import test from 'ava'

import Record from 'timeseries-record'
import RecordContext from '@strong-roots-capital/record-context'

/**
 * Library under test
 */

import BrandedRecord from '../src/branded-record'

test('should be importable', t => {
    t.pass()
})

test('should be of expected form', t => {
    function returnRecord(): Record {
        return {
            Time: 1,
            Open: 2,
            High: 3,
            Low: 4,
            Close: 5,
            Volume: 6
        }
    }
    function returnBrandedRecord(): BrandedRecord {
        return {
            record: returnRecord(),
            context: {
                tradepair: 'my',
                timeframe: 1440,
                exchange: 'yours'
            }
        }
    }
    const brandedRecord: BrandedRecord = returnBrandedRecord()
    t.pass()
})



// TODO: write tests
