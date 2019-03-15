/**
 * branded-record
 * Interface for Record paired with RecordContext
 */

import Record from 'timeseries-record'
import RecordContext from '@strong-roots-capital/record-context'


/**
 * A time-series Record associated with the context of its origin.
 */
interface BrandedRecord {
    /**
     * An atomic unit of time-series data.
     */
    record: Record
    /**
     * Context of `record`
     */
    context: RecordContext
}


export default BrandedRecord
