import { DatePickerContainer } from '../../../../lib/DatePicker'
import { InputContainer } from '../../components/input'
import { LabelContainer } from '../../components/label'
import * as Presenter from './presenter'

export type ContainerProps = {
	/**
	 * date (YYYY-MM-DD)
	 */
	date: string
}

type Props = ContainerProps
export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	const {
		activities,
		pushActivity,
		removeActivity,
		changeActivity,
	} = Presenter.useActivities([])

	const _date = new Date(props.date)
	return (
		<div className="space-y-2">
			{/* date: add parent div to avoid space between label and date */}
			<div>
				<LabelContainer label="日付" />
				<DatePickerContainer
					selected={_date}
					onChange={() => {
						// console.debug(e)
					}}
				/>
			</div>
			{/* activity list */}
			{activities === null || activities === undefined ? (
				<></>
			) : (
				<div>
					<LabelContainer label="アクティビティ" />
					{activities.map((activity, i) => {
						const id = `${props.date}-activity-${i}`
						return (
							<div key={i} className="flex flex-row space-x-1">
								<InputContainer
									value={activity}
									id={id}
									placeHolder="アクティビティ"
									onChange={(e) => {
										changeActivity(i, e.target.value)
									}}
								/>
								{/* ボタン押下でアクティビティ削除 | TODO: Replace Del to trash icon */}
								<button
									className="hover:bg-gray-50 font-bold py-2 px-3 rounded w-1/12 text-left"
									onClick={() => {
										removeActivity(i)
									}}
								>
									Del
								</button>
							</div>
						)
					})}
					{/* ボタン押下でアクティビティ追加 */}
					<button
						className="hover:bg-gray-100 font-bold py-2 px-4 rounded w-10/12 text-left"
						onClick={() => {
							pushActivity()
						}}
					>
						+ New
					</button>
				</div>
			)}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component date={props.date} />
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return <StyledComponent date={props.date} />
}
