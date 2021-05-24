import { DatePicker } from '../../../../lib/DatePicker'
import { FormContainer } from '../../components/form'
import { LabelContainer } from '../../components/label'

type Props = {
	/**
	 * date (YYYY-MM-DD)
	 */
	date: string
}

export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	return (
		<div className="space-y-2">
			{/* date: add parent div to avoid space between label and date */}
			<div>
				<LabelContainer label="日付" />
				<DatePicker selected={new Date()} />
			</div>
			{/* title */}
			<FormContainer
				label="タイトル"
				value=""
				inputId="title"
				inputPlaceHolder="タイトル"
			/>
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component date={props.date} />
}
